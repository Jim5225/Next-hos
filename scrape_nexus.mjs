import https from 'https';
import fs from 'fs';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const pages = [
    { name: 'home', url: 'https://nexushospitalmymensingh.com/' },
    { name: 'doctors', url: 'https://nexushospitalmymensingh.com/doctors/' },
    { name: 'about', url: 'https://nexushospitalmymensingh.com/about-us/' },
    { name: 'contact', url: 'https://nexushospitalmymensingh.com/contact-us/' },
    { name: 'nicu', url: 'https://nexushospitalmymensingh.com/nicu/' },
    { name: 'cathlab', url: 'https://nexushospitalmymensingh.com/cath-lab/' },
    { name: 'icuccu', url: 'https://nexushospitalmymensingh.com/icu-ccu/' },
    { name: 'ambulance', url: 'https://nexushospitalmymensingh.com/ambulance/' },
    { name: 'ctscan', url: 'https://nexushospitalmymensingh.com/ct-scan/' },
    { name: 'dialysis', url: 'https://nexushospitalmymensingh.com/dialysis/' }
  ];

  const results = {};

  for (const page of pages) {
    try {
      console.log(`Fetching ${page.name}...`);
      const html = await fetchUrl(page.url);
      results[page.name] = html;
      fs.writeFileSync(`raw_${page.name}.html`, html, 'utf8');
    } catch (err) {
      console.error(`Failed ${page.name}:`, err.message);
    }
  }

  console.log('Done fetching pages!');
}

run();
