import fs from 'fs';

// Helper to strip tags and decode basic entities
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "-")
    .replace(/\s+/g, ' ')
    .trim();
}

// Parse doctors from raw_doctors.html
function parseDoctors() {
  const html = fs.readFileSync('raw_doctors.html', 'utf8');
  const doctors = [];
  
  // Elementor doctor card or custom loop items
  // Let's find patterns like:
  // <img ... data-src="(url)" ...><h3>(Name)</h3><p>(Specialty)</p><p>(Degrees)<br />(Institute)</p>...<a href="(profileUrl)">Read More
  const regex = /<img[^>]+(?:data-src|src)=["']([^"']+)["'][^>]*>[\s\S]*?<h3>([^<]+)<\/h3>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<a\s+href=["']([^"']+)["'][^>]*>Read More/gi;
  
  let match;
  while ((match = regex.exec(html)) !== null) {
    const imageUrl = match[1];
    const name = cleanText(match[2]);
    const specialty = cleanText(match[3]);
    const degreesAndInst = match[4].split(/<br\s*\/?>/i);
    const degrees = cleanText(degreesAndInst[0] || '');
    const institute = cleanText(degreesAndInst.slice(1).join(', ') || '');
    const profileUrl = match[5];

    if (name) {
      doctors.push({
        id: doctors.length + 1,
        name,
        specialty,
        degrees,
        institute,
        imageUrl: imageUrl.startsWith('data:') ? '' : imageUrl,
        profileUrl
      });
    }
  }

  // Also fallback to check any other doctor items in the html if regex missed some
  console.log(`Parsed ${doctors.length} doctors with primary regex`);
  return doctors;
}

// Let's parse about & contact & other pages
function parseContent() {
  const home = fs.readFileSync('raw_home.html', 'utf8');
  const about = fs.readFileSync('raw_about.html', 'utf8');
  const contact = fs.readFileSync('raw_contact.html', 'utf8');
  const nicu = fs.readFileSync('raw_nicu.html', 'utf8');
  const cathlab = fs.readFileSync('raw_cathlab.html', 'utf8');
  const icuccu = fs.readFileSync('raw_icuccu.html', 'utf8');
  const ambulance = fs.readFileSync('raw_ambulance.html', 'utf8');
  const ctscan = fs.readFileSync('raw_ctscan.html', 'utf8');
  const dialysis = fs.readFileSync('raw_dialysis.html', 'utf8');

  return {
    aboutText: cleanText(about),
    contactText: cleanText(contact),
    nicuText: cleanText(nicu),
    cathlabText: cleanText(cathlab),
    icuccuText: cleanText(icuccu),
    ambulanceText: cleanText(ambulance),
    ctscanText: cleanText(ctscan),
    dialysisText: cleanText(dialysis)
  };
}

const docs = parseDoctors();
fs.writeFileSync('parsed_doctors.json', JSON.stringify(docs, null, 2), 'utf8');

const content = parseContent();
fs.writeFileSync('parsed_content.json', JSON.stringify(content, null, 2), 'utf8');
console.log('Done parsing!');
