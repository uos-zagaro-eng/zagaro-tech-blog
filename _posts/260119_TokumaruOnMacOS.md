---
title: '徳丸本 Docker版の実習環境をmacOSで構築する'
excerpt: '徳丸浩 著「体系的に学ぶ 安全なWebアプリケーションの作り方 第2版」の実習環境をmacOSで構築します。(Apple Silicon対応)'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2026-01-19'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - '輪読会'
  - 'PHP'
  - 'Docker'
  - '環境構築'
  - 'macOS'
---

こんにちは。山嵜です。

徳丸本(体系的に学ぶ 安全な Web アプリケーションの作り方 第 2 版)の実習環境を macOS で構築したので、備忘録を兼ねて導入の流れを本記事で紹介させていただきます。

## 記事の対象者

- 徳丸本で環境構築を行う方
- macOS(Apple Silicon)を使用している方

なお、本記事は徳丸本の書籍が手元にある前提で話が進みます。

## 必要なもの

以下のソフトウェアを各自インストールしてください。

- [Mozilla Firefox](https://www.firefox.com/ja/)
  - Firefox 拡張機能: FoxyProxy-Standard
- [Docker Desktop](https://www.docker.com/ja-jp/)
- [OWASP ZAP](https://github.com/zaproxy/zaproxy/releases/tag/v2.17.0)
- [Java (JRE)](https://www.java.com/ja/)

拡張機能に関しては、徳丸本のページに設定方法が記載されています。
@[card](https://wasbook.org/foxyproxy8.html)

macOS を使用している方でも、以下の動画が参考になると思います。
ただし、**OWASP ZAP**の導入については手順が異なるので以下にまとめています。

https://youtu.be/07k-7Q2xGzY?si=yYBfZTHiYdsnKpzs

:::message
**OWASP ZAP**をインストールする前に、Firefox(及び拡張機能)、Docker、Java の導入を済ませておいてください。また、Docker コンテナを起動しておくことを推奨します。
:::

## OWASP ZAP のインストール

> 記事作成時の最新バージョンは 2.17.0 です。

GitHub の Releases からダウンロードするファイルを選択します。
Apple Silicon(M1, M2 など)を使用している方は**ZAP_2.17.0_aarch64.dmg**を選択すれば OK です。

![GitHubのRelease画面](https://github.com/user-attachments/assets/63184d6a-4c65-4b57-ba8d-bd6516bd503f)

**dmg**をダウンロードしたらダブルクリックして開き、 Application に追加します。

しかし、LaunchPad 経由で開こうとすると「**開発元を検証できないため開けません。**」というエラーが出ることがあります。
その場合は、以下の手順を参考にして dmg を開く手順を行ってください。
@[card](https://qiita.com/suzukidog/items/f0e71297ec5307b473fd)

開くことができたら、**OWASP ZAP**を開いて進めていきます。

## OWASP ZAP の各種設定

先ほど掲載した徳丸さんの動画は 2023 年 2 月に公開されているため、現在のバージョンと少し設定画面が異なります。
こちらは、macOS に限らず Windows ユーザーの方にも参考になると思います。

まずは起動します。最初はセッションの保持方法について尋ねられますが、特に指定はありません。
今回は、一番上を選択して**開始**を押します。
![](https://github.com/user-attachments/assets/01b51981-125b-48eb-af2d-7add4aa6add8)
後にアドオンのダイアログが出てきますが、そのまま閉じて OK です。

ツール > オプションを選択します。
![](https://github.com/user-attachments/assets/90cf0e7e-f2ab-4c1a-b99b-c610449e3ecf)

ネットワーク > **ローカルサーバー/プロキシ**を選択して、赤枠のように設定します。
![](https://github.com/user-attachments/assets/b0639b02-26bc-4a54-8314-badd89aa5733)

ネットワーク > **接続**を選択して、赤枠のように設定します。
![](https://github.com/user-attachments/assets/d07de13a-0467-44eb-93ac-a3dceb737a9f)
:::message
画像のように表示されない場合、**HTTP プロキシ**を選択しているか確認してください。
:::

**ブレークポイント**を選択して、赤枠のような設定になっているかを確認してください。
![](https://github.com/user-attachments/assets/764ecac1-9641-4f43-92c2-2b169ad30b20)

**HUD**を選択して、赤枠のような設定になっているかを確認してください。`Enabled when using the ZAP Desktop`のチェックが外されていることを確認できれば設定は完了です。
![](https://github.com/user-attachments/assets/0890e0b1-c223-47ea-a11f-5b9cbead7cc3)

ここで OWASP ZAP を再起動します。

## 実習環境の最終確認

あとは実習環境へのアクセスができるかを確認しましょう。

ホームの**手動探索**を選択します。
![](https://github.com/user-attachments/assets/20ad3045-46d7-4952-9983-ac02e172dfbc)

**探索対象 URL**に`http://example.jp`を入力して、Firefox で**ブラウザを起動**ボタンを押しましょう。
![](https://github.com/user-attachments/assets/dca02418-ae89-4676-b543-6769b10e7db3)
:::message
なぜかはわかりませんが、`.`の表示が消えてしまう不具合があるようです。アドレスをコピペしてそのまま進めていただければ大丈夫です。
:::

Firefox ブラウザが開いて、ページが表示されたら環境の準備は完了です。

## 参考にさせていただいた記事/Web サイト

- [徳丸本実習環境 Docker 版を Windows10/11 に 30 分で導入する](https://youtu.be/07k-7Q2xGzY?si=yYBfZTHiYdsnKpzs)
- [安全な Web アプリケーションの作り方 第 2 版 サポートサイト](https://wasbook.org/wasbook-docker.html)
- [徳丸本の Docker 実習環境を M1/M2 Mac で１から構築した #PHP - Qiita](https://qiita.com/mainy/items/62e85191744f4f69f01c)
- [第 3 回　 M1/M2 Mac に対応！Docker 環境で実習環境を構築しよう (三雲 勇二)](https://www.school.ctc-g.co.jp/columns/mikumo/mikumo03.html)
- [開発元が不明な Mac アプリを開く - Apple サポート (日本)](https://support.apple.com/ja-jp/guide/mac-help/mh40616/mac)
