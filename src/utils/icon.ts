export const getTextIcon = (text: string, bgColor = "#915eff", fgColor = "#ffffff") => {
  const normalized = text.replace(/\s*\/\s*/g, " / ").trim();
  const words = normalized.split(/\s+/).filter((word) => word.length > 0);

  const maxChars = 12;
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if (!currentLine) {
      currentLine = word;
      continue;
    }

    if (`${currentLine} ${word}`.length <= maxChars) {
      currentLine += ` ${word}`;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  while (lines.length > 3) {
    const last = lines.pop()!;
    lines[lines.length - 1] = `${lines[lines.length - 1]} ${last}`;
  }

  const maxLength = Math.max(...lines.map((line) => line.length));
  let fontSize = 42;
  if (maxLength > 14) fontSize = 34;
  if (maxLength > 18) fontSize = 28;
  if (lines.length === 3) fontSize = Math.min(fontSize, 30);

  const textElements = lines
    .map(
      (line, index) =>
        `<tspan x="50%" dy="${index === 0 ? 0 : 1.2}em" fill="${fgColor}">${line}</tspan>`,
    )
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <rect width="256" height="256" rx="48" ry="48" fill="${bgColor}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${fontSize}" font-weight="800">${textElements}</text>
</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
