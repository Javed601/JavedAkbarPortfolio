const fs = require('fs');
const b64 = fs.readFileSync('public/logo-favicon.JPG').toString('base64');
const svg = `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="circleClip">
      <circle cx="128" cy="128" r="114" />
    </clipPath>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#c084fc" flood-opacity="0.9" />
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#915eff" flood-opacity="0.6" />
    </filter>
  </defs>
  <rect width="256" height="256" fill="#060814" />
  <circle cx="128" cy="128" r="120" fill="none" stroke="#c084fc" stroke-width="7" filter="url(#glow)" opacity="0.95" />
  <circle cx="128" cy="128" r="116" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.6" />
  <image href="data:image/jpeg;base64,${b64}" x="14" y="14" width="228" height="228" clip-path="url(#circleClip)" />
</svg>`;
fs.writeFileSync('public/favicon.svg', svg, 'utf8');
console.log('favicon.svg written successfully');
