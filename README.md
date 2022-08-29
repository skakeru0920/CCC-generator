# CCC-GENERATOR

**このリポジトリは Code Chrysalis の生徒であるときに作成しました
（This was created during my time as a student at Code Chrysalis**

# About

ccc-generator は名前の通り CCC のスライドを作成するアプリケーションです

https://ccc-generator-production.herokuapp.com/

## CCC とは

Code Chrysalis Caraoke の略です。
与えられたお題と 5 枚のスライドを基に、3 分間のプレゼンをします。

今回のアプリケーションではお題をランダムに生成し、スタートボタンを押下したら 30 秒ごとにランダムな画像が表示される仕組みとなっています。

## Technology used

以下のオープンソースを利用して作られています。

1. Postgres(DB)
1. Node.js
1. Express
1. Knex.js
1. react

## Downloading and installing steps

1. Clone this repository

```bash
$ git clone https://github.com/skakeru0920/CCC-generator.git
```

2. Go into the repository

```bash
$ cd CCC-generator
```

3. Install dependencies

```bash
$ npm init
```

4. Create database, Run migrations and set up the database

```bash

$ npm run server && npm run start
```
