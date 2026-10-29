import os
import json
import urllib.request
import urllib.error
import zipfile
from datetime import datetime

BACKUP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "backups", "old_site_backup")
os.makedirs(BACKUP_DIR, exist_ok=True)
PAGES_DIR = os.path.join(BACKUP_DIR, "pages_html")
os.makedirs(PAGES_DIR, exist_ok=True)

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

def fetch_url(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            return response.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

print("1. Fetching all WordPress pages metadata via REST API...")
pages_raw = fetch_url("https://nexushospitalmymensingh.com/wp-json/wp/v2/pages?per_page=100")
pages = json.loads(pages_raw.decode("utf-8")) if pages_raw else []

with open(os.path.join(BACKUP_DIR, "all_pages_wp_api.json"), "w", encoding="utf-8") as f:
    json.dump(pages, f, ensure_ascii=False, indent=2)

print(f"Saved {len(pages)} pages JSON data.")

print("2. Fetching Media list metadata...")
all_media = []
page_num = 1
while True:
    media_url = f"https://nexushospitalmymensingh.com/wp-json/wp/v2/media?per_page=100&page={page_num}"
    raw = fetch_url(media_url)
    if not raw:
        break
    try:
        media_items = json.loads(raw.decode("utf-8"))
        if not media_items or not isinstance(media_items, list):
            break
        all_media.extend(media_items)
        print(f"Fetched media page {page_num}: {len(media_items)} items")
        page_num += 1
    except Exception:
        break

with open(os.path.join(BACKUP_DIR, "all_media_wp_api.json"), "w", encoding="utf-8") as f:
    json.dump(all_media, f, ensure_ascii=False, indent=2)
print(f"Saved {len(all_media)} media records.")

print("3. Fetching key raw HTML pages for offline viewing...")
key_urls = [
    ("homepage.html", "https://nexushospitalmymensingh.com/"),
    ("about_us.html", "https://nexushospitalmymensingh.com/about-us/"),
    ("doctors.html", "https://nexushospitalmymensingh.com/doctors/"),
    ("services.html", "https://nexushospitalmymensingh.com/service/"),
    ("appointment.html", "https://nexushospitalmymensingh.com/appointment/"),
    ("contact.html", "https://nexushospitalmymensingh.com/contact/"),
    ("board_of_directors.html", "https://nexushospitalmymensingh.com/board-of-directors/"),
    ("message_chairman.html", "https://nexushospitalmymensingh.com/message-from-chairman/"),
    ("message_md.html", "https://nexushospitalmymensingh.com/message-from-managing-director/"),
]

for filename, url in key_urls:
    print(f"Downloading {url} ...")
    content = fetch_url(url)
    if content:
        with open(os.path.join(PAGES_DIR, filename), "wb") as f:
            f.write(content)

# Create a zip file of this backup
zip_path = os.path.join(os.path.dirname(BACKUP_DIR), f"nexushospital_backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}.zip")
print(f"4. Packaging everything into {zip_path} ...")
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(BACKUP_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, BACKUP_DIR)
            zipf.write(file_path, arcname)

print("BACKUP COMPLETED SUCCESSFULLY!")
print(f"Backup folder: {BACKUP_DIR}")
print(f"Backup ZIP: {zip_path}")
