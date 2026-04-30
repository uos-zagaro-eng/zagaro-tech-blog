---
title: 'miniforgeでpython 3.xを管理'
excerpt: '渡邉研究室 B3向け資料！'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2025-11-07'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - 'wtlab'
  - 'Python'
  - 'Anaconda'
  - 'miniforge'
---

# miniforge で python 3.x を管理

## 前提

Anaconda は削除すること

## miniforge の Github からインストールする

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

質問に答えてインストールする

~/.zshrc を vim で開く

```
sudo vim ~/.zshrc
```

~/.zshrc に次の行を追加

```bash
eval "$(/Users/ここは自分のユーザ名/miniforge3/bin/conda shell.zsh hook)"
```

下記を一度実行して初期化

```bash
conda init
```

## miniforge 環境の作成と設定

miniforge は用途に応じていくつもの環境を作成・管理することができます。

conda env list コマンドで、miniforge で利用できる環境一覧を表示できます。
インストールしたてほやほやなので、base 環境しかありません。

base 環境の Python バージョンを確認してみます。conda list コマンドを実行します。

conda 環境で使用可能な Python のバージョンを確認してみましょう。conda search python コマンドを使います。

base 環境を最新のバージョンに変更。

```bash
conda install -n base python=3.13.5
```

```bash
python -V
// 出力: Python 3.13.5
```

Python3.13.5 が使えるようになりました。

## 別の環境を作成する

miniforge をインストールするとデフォルトの base 環境のみが作成されているものの、他の環境も作成することができます。

## 機械学習の環境を作成

conda create コマンドで環境を作成します。-n オプションで、作成する環境の名前を指定することができます。

Python が新すぎるとモジュールが対応していないことがあるので、3.9 を指定して py39 環境を作る。

```bash
conda create -n py39 python=3.9
```

実際に作成されたか、環境一覧を表示して確認。

```bash
conda env list
```

\*がついているのが、現在アクティブになっている環境です。

#### 仮想環境の削除

```bash
conda remove -n 環境名 --all
```

py39 環境に切り替えます。conda activate コマンドを使います。

```bash
conda activate py39
```

シェルで起動時から py39 環境を使用したい(ターミナル起動時に自動で py39 環境を指定したい)場合は、`.zshrc`に下記を追記する

```bash
conda activate py39
```

#### 環境にインストール

よく使うモジュールをインストールする

```bash
conda install numpy scipy sympy matplotlib scikit-learn pandas jupyter notebook ipykernel jupyterlab graphviz pydot openpyxl
```

#### jupyter lab を起動する

```bash
jupyter lab
```

#### tensorflow の 2.10 をインストール

```bash
conda install tensorflow==2.10
```

インストールできないというメッセージが表示されるので、pip を使ってインストール

```bash
pip install tensorflow==2.10
```

これにより、Keras もインストールされる

#### Google mediapipe をインストールする

```bash
pip install mediapipe
```

#### opencv-python をインストールする

```bash
pip install opencv-python==3.4.18.65
```

#### pytorch をインストールする

```bash
pip install torch torchvision
```

#### spyder のインストール

```bash
pip install spyder
```

spyder の起動

```bash
spyder
```

画面収録の場合（ただし、警告が連続で出る by 2025/9/21）

```bash
sudo spyder
```

## MeCab のインストール

```bash
pip install mecab-python3
pip install unidic-lite
conda install wordcloud
```

brew でインストール

```bash
brew install mecab mecab-ipadic
```

## NEologd をインストール

```bash
git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git
cd mecab-ipadic-neologd/
./bin/install-mecab-ipadic-neologd -a
```

## 以下のコマンドでディレクトリのパスを確認

```bash
echo `mecab-config --dicdir`"/mecab-ipadic-neologd"
↓
/usr/local/lib/mecab/dic/mecab-ipadic-neologd
```

## コミュニティ抽出（ルービン法を含む）

```bash
pip install community
pip install python-louvain
```
