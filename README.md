# Blog Template

A simple personal blog template.

You can start blogging just by adding markdown files to the `_posts` directory. Of course, you can also reuse articles from platforms like Zenn or Qiita.

For more details, please refer to the following article:

[Created a blog template with Next.js + GitHub Pages →](https://zenn.dev/subt/articles/957bd5d01485e1)

## Demo

https://sub-t.github.io/blog-template/

## Features

- Responsive design  
- Dark mode support  
- Pagination on the article list page  
- Table of contents  
- SEO optimized with `next-seo`  
- OGP support  

## Development

```bash
git clone https://github.com/sub-t/blog-template project-name
cd project-name
yarn
yarn dev
```

Main site settings are managed in `src/config/app.ts` (`APP_BASE_PATH`, `ROOT_URL`, `SITE_NAME`).

For markdown preview, image paths like `![alt](../public/assets/...)` (or `![alt](./public/assets/...)`) are automatically converted to `../../assets/...` at render time.

## Deployment

Refer to this article for deployment instructions:

[Deploying a Next.js Blog to GitHub Pages →](https://jamband.github.io/blog/2021/08/deploy-nextjs-app-to-github-pages/)

## License

MIT License

---

# ブログテンプレート

個人ブログ向けのシンプルなテンプレートです。

`_posts` ディレクトリに Markdown ファイルを追加するだけでブログを始められます。もちろん、Zenn や Qiita に投稿した記事を流用することも可能です。

詳細は以下の記事をご覧ください：

[Next.js + GitHub Pagesのブログテンプレートを作った →](https://zenn.dev/subt/articles/957bd5d01485e1)

## デモ

https://sub-t.github.io/blog-template/

## 特徴

- レスポンシブ対応  
- ダークモード対応  
- 記事一覧ページにページネーションあり  
- 目次付き  
- `next-seo` による SEO 対策済み  
- OGP 対応  

## 開発方法

```bash
git clone https://github.com/sub-t/blog-template project-name
cd project-name
yarn
yarn dev
```

Markdown 執筆時は `![alt](../public/assets/...)`（または `![alt](./public/assets/...)`）形式の画像パスが、表示時に `../../assets/...` へ自動変換されます。

## デプロイ方法

こちらの記事を参考にしてください：

[Next.js で作ったブログを GitHub Pages にデプロイする →](https://jamband.github.io/blog/2021/08/deploy-nextjs-app-to-github-pages/)

## ライセンス

MIT ライセンス
