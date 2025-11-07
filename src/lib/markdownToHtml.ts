import markdownToHtml from 'zenn-markdown-html';

export default async function markdownHtml(markdown: string): Promise<string> {
  const html = markdownToHtml(markdown);
  return html;
}
