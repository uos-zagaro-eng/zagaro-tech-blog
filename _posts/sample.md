---
title: 'Markdownレンダリング用サンプル'
excerpt: 'Markdownレンダリングが正常に動作するかを確認するための記事です'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2025-11-11'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - 'sample'
---

## Markdown レンダリングテスト用サンプル

このテキストは、**Markdown** の主な記法があなたの環境でどのように表示されるかを確認するために使用できます。

### 1\. 見出し (Headings)

文章の構造化に使用します。`#` の数でレベルが決まります。

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

---

### 2\. テキスト装飾 (Emphasis)

- **太字 (Bold)**: `**太字**` または `__太字__`
- _斜体 (Italic)_: `*斜体*` または `_斜体_`
- **_太字と斜体 (Bold & Italic)_**: `***太字と斜体***`
- \~\~打ち消し線 (Strikethrough)\~\~: `~~打ち消し線~~`

---

### 3\. リスト (Lists)

#### 順序なしリスト (Unordered List)

- コーヒー豆
- 紅茶
  - アールグレイ
  - ダージリン
- 緑茶

#### 順序付きリスト (Ordered List)

1.  準備
2.  実行
3.  結果確認
    1.  エラーチェック
    2.  レポート作成

---

### 4\. 引用 (Blockquotes)

> これは引用ブロックです。
>
> > ネストされた引用も表示されるでしょうか？
>
> 重要な情報を目立たせるのに役立ちます。

---

### 5\. コード (Code)

#### インラインコード (Inline Code)

短いコードは `<div>` や `<span>` のように**バッククォート**で囲みます。

#### コードブロック (Code Block)

複数行のコードや整形済みテキストに使用します。言語指定（シンタックスハイライト）も可能です。

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Markdown User');
```

---

### 6\. リンクと画像 (Links and Images)

#### リンク (Links)

[Google のウェブサイトへ](https://www.google.com/)

#### 画像 (Images)

---

### 7\. 水平線 (Horizontal Rule)

セクションの明確な区切りに使用します。

---

### 8\. テーブル (Tables)

| 製品名     |    価格 | 在庫 |
| :--------- | ------: | :--: |
| ノート PC  | 120,000 |  〇  |
| モニター   |  35,000 |  ×   |
| キーボード |   8,000 |  〇  |

---

### 9\. 数式 (LaTeX - オプション)

数式レンダリングのテストが必要な場合。

インライン数式: $E=mc^2$ です。

ディスプレイ数式:
$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$

---
