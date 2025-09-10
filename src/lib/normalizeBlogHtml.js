// Normalize HTML quirks coming from CMS
// - Convert paragraphs that contain lines starting with "* " or "- " into proper <ul><li>...</li></ul>
// - Preserve any non-bullet text in the original paragraph as its own <p>

// returns the normalized html

export const  normalizeBlogHtml = (html) => {
    if (!html || typeof html !== 'string') return html;
  
    // Replace <p> blocks that include bullet-like lines into proper lists
    const converted = html.replace(/<p>([\s\S]*?)<\/p>/g, (match, inner) => {
      const lines = inner.split(/\r?\n/);
      const bulletItems = [];
      const nonBulletLines = [];
  
      for (const rawLine of lines) {
        const line = rawLine.trim();
        const bulletMatch = line.match(/^([*\-])\s+(.*)$/);
        if (bulletMatch) {
          bulletItems.push(bulletMatch[2]);
        } else if (line.length > 0) {
          nonBulletLines.push(line);
        }
      }
  
      if (bulletItems.length === 0) {
        return match; // leave paragraph as-is
      }
  
      const precedingText = nonBulletLines.join(' ').trim();
      const ul = '<ul>' + bulletItems.map((item) => `<li>${item}</li>`).join('') + '</ul>';
  
      if (precedingText) {
        return `<p>${precedingText}</p>${ul}`;
      }
  
      return ul;
    });
  
    return converted;
  }