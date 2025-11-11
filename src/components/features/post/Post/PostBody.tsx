'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
  content: string;
};

// zenn-embed-elementsは SSR に対応していないため、クライアント側で読み込む必要があります。
// https://github.com/zenn-dev/zenn-editor?tab=readme-ov-file#4-katex-%E8%A8%98%E6%B3%95%E3%82%92%E4%BD%BF%E3%81%86%E5%A0%B4%E5%90%88%E3%81%AE%E3%81%BFzenn-embed-elements%E3%82%92%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%82%80
export const PostBody = ({ content }: Props) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import('zenn-embed-elements');
    setIsMounted(true);
  }, []);

  return (
    <div
      className="post text-primary-1 znc"
      data-theme={isMounted ? (theme === 'dark' ? 'dark-blue' : 'light') : undefined}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
