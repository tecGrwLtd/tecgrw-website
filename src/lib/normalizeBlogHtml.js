// Normalize HTML quirks coming from CMS
// - Convert paragraphs that contain lines starting with "* " or "- " into proper <ul><li>...</li></ul>
// - Preserve any non-bullet text in the original paragraph as its own <p>


// it returns the normalized html

export const  normalizeBlogHtml = (html) => {
    if (!html || typeof html !== 'string') return html;
  
    // If the content appears to be plain text (no HTML tags), convert to HTML first
    const looksLikePlainText = !/[<>]/.test(html) || /^\s*[^<]*\n/.test(html);
    let working = html;
    if (looksLikePlainText) {
      const lines = working.split(/\r?\n/);
      const blocks = [];
      let currentParagraph = [];
      let currentList = [];

      const flushParagraph = () => {
        if (currentParagraph.length > 0) {
          const text = currentParagraph.join(' ').trim();
          if (text) blocks.push(`<p>${text}</p>`);
          currentParagraph = [];
        }
      };
      const flushList = () => {
        if (currentList.length > 0) {
          blocks.push('<ul>' + currentList.map((item) => `<li>${item}</li>`).join('') + '</ul>');
          currentList = [];
        }
      };

      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (line.length === 0) {
          flushParagraph();
          flushList();
          continue;
        }
        const bulletMatch = line.match(/^([*\-])\s+(.*)$/);
        if (bulletMatch) {
          // entering or continuing a list
          if (currentParagraph.length > 0) flushParagraph();
          currentList.push(bulletMatch[2]);
        } else {
          // normal text
          if (currentList.length > 0) flushList();
          currentParagraph.push(line);
        }
      }

      flushParagraph();
      flushList();
      working = blocks.join('');
    }

    // Replace <p> blocks that include bullet-like lines into proper lists
    const converted = working.replace(/<p>([\s\S]*?)<\/p>/g, (match, inner) => {
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