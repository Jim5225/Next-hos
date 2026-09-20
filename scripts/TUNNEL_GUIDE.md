# Nexus Hospital — Dagor ERP Cloudflare Tunnel Integration Guide

এই গাইডের মাধ্যমে নেক্সাস হাসপাতালের লোকাল ইআরপি সার্ভার (**`192.168.15.220`**) কে ক্লাউডের সাথে নিরাপদে যুক্ত করা যাবে।

---

## ⚡ অপশন ১: Instant Quick Tunnel (১-ক্লিকে টেস্ট করার জন্য)

কোনো ক্লাউডফ্লেয়ার অ্যাকাউন্ট বা ডোমেন কনফিগারেশন ছাড়াই সরাসরি লাইভ করার পদ্ধতি:

1. হাসপাতালের লোকাল নেটওয়ার্ক বা ওয়াইফাই-তে কানেক্টেড যেকোনো উইন্ডোজ পিসিতে এই প্রোজেক্টের `scripts` ফোল্ডারে যান।
2. **`start-tunnel.bat`** ফাইলে ডাবল-ক্লিক করুন।
3. স্ক্রিপ্টটি স্বয়ংক্রিয়ভাবে অফিসিয়াল `cloudflared.exe` ডাউনলোড করে টানেল চালু করবে।
4. স্ক্রিনে একটি সুরক্ষিত HTTPS লিঙ্ক আসবে (যেমন: `https://nexus-erp-random123.trycloudflare.com`)।
5. এই লিঙ্কে ঢুকলে হাসপাতালের বাইরের যেকোনো ডিভাইস থেকে সরাসরি ডাগোর ইআরপির স্ক্রিন লোড হবে!

---

## 🛡️ অপশন ২: Permanent Production Tunnel (স্থায়ী ডোমেনের জন্য)

হাসপাতালের স্থায়ী সাবডোমেন (যেমন: `erp.nexushospitalmymensingh.com` বা `api.nexushospitalmymensingh.com`) সেটআপ করতে:

### ধাপ ১: Cloudflare Zero Trust-এ লগইন
1. [Cloudflare Dashboard](https://dash.cloudflare.com/) এ লগইন করুন।
2. বাঁদিকের মেনু থেকে **Zero Trust** -> **Networks** -> **Tunnels** এ ক্লিক করুন।
3. **Add a Tunnel** বাটনে ক্লিক করুন এবং নাম দিন: `nexus-dagor-erp`।

### ধাপ ২: টানেল কানেক্টর ইনস্টল (Windows)
Cloudflare আপনাকে একটি কমান্ড দেবে, যেমন:
```powershell
cloudflared.exe service install <YOUR_TUNNEL_TOKEN>
```
হাসপাতালের সার্ভারে কমান্ড প্রম্পট (CMD as Administrator) খুলে এটি পেস্ট করলেই এটি ব্যাকগ্রাউন্ড উইন্ডোজ সার্ভিস হিসেবে সেট হয়ে যাবে (পিসি রিস্টার্ট হলেও একা একাই চলবে)।

### ধাপ ৩: পাবলিক হোস্টনেম রাউটিং
Cloudflare ড্যাশবোর্ডে:
- **Subdomain**: `erp`
- **Domain**: `nexushospitalmymensingh.com`
- **Type**: `HTTP`
- **URL**: `192.168.15.220:80` (অথবা ডাগোর ইআরপির নির্দিষ্ট পোর্ট)

Save দিলেই সাথে সাথে `https://erp.nexushospitalmymensingh.com` থেকে সারা বিশ্ব থেকে সুরক্ষিতভাবে ইআরপির সাথে যোগাযোগ করা যাবে!

---

## 🔄 ওয়েবসাইট ও ইআরপি সিঙ্ক করার এপিআই এন্ডপয়েন্টস

| ফিচার | ফ্রন্টএন্ড মডাল | ডাগোর ইআরপি মডিউল | মেথড |
|---|---|---|---|
| ডাক্তার সিরিয়াল বুকিং | `AppointmentModal.jsx` | `Appointment System` | POST |
| ল্যাব টেস্ট রিপোর্ট | `ReportDownloadModal.jsx` | `LIS` | GET |
| সিটি স্ক্যান / এক্স-রে | `ReportDownloadModal.jsx` | `Imaging Report` | GET |
