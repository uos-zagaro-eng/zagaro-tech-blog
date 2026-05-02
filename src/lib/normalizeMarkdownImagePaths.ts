const isExternalOrAbsolutePath = (value: string) =>
  value.startsWith('/') ||
  value.startsWith('data:') ||
  value.startsWith('#') ||
  /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(value);

const toPublicAssetPath = (rawPath: string) => {
  const normalized = rawPath.replace(/\\/g, '/');

  if (isExternalOrAbsolutePath(normalized)) {
    return rawPath;
  }

  if (/^public\//.test(normalized)) {
    return `../../${normalized.replace(/^public\/+/, '')}`;
  }

  if (/^(?:\.\.\/|\.\/)+public\//.test(normalized)) {
    return `../../${normalized.replace(/^(?:\.\.\/|\.\/)+public\/+/, '')}`;
  }

  return rawPath;
};

const normalizeImagePathInChunk = (chunk: string) => {
  return chunk.replace(
    /(!\[[^\]]*]\(\s*<?)([^)\s>]+)(>?)(\s*(?:"[^"]*"|'[^']*')?\s*\))/g,
    (_, prefix: string, path: string, suffix: string, closing: string) =>
      `${prefix}${toPublicAssetPath(path)}${suffix}${closing}`,
  );
};

export const normalizeMarkdownImagePaths = (markdown: string) => {
  const hasTrailingNewline = markdown.endsWith('\n');
  const lines = markdown.split('\n');
  const normalizedLines: string[] = [];

  let fenceChar: '`' | '~' | null = null;
  let fenceLength = 0;

  lines.forEach((line) => {
    const trimmedStart = line.trimStart();
    const fenceMatch = trimmedStart.match(/^(```+|~~~+)/);

    if (fenceChar) {
      if (
        fenceMatch &&
        fenceMatch[1].startsWith(fenceChar) &&
        fenceMatch[1].length >= fenceLength
      ) {
        fenceChar = null;
        fenceLength = 0;
      }

      normalizedLines.push(line);
      return;
    }

    if (fenceMatch) {
      fenceChar = fenceMatch[1][0] as '`' | '~';
      fenceLength = fenceMatch[1].length;
      normalizedLines.push(line);
      return;
    }

    normalizedLines.push(normalizeImagePathInChunk(line));
  });

  const normalizedMarkdown = normalizedLines.join('\n');

  if (hasTrailingNewline) {
    return `${normalizedMarkdown}\n`;
  }

  return normalizedMarkdown;
};
