# hi
<div align="center">

 [![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=64F75B&width=435&lines=%EF%BC%AB%EF%BC%A1%EF%BC%B6%EF%BC%A9+-+%EF%BC%AD%EF%BC%A4;%EF%BC%A2%EF%BC%B9+%EF%BC%AB%EF%BC%A1%EF%BC%B6%EF%BC%A9%EF%BC%A4%EF%BC%B5+%EF%BC%B2%EF%BC%A1%EF%BC%B3%EF%BC%A1%EF%BC%AE%EF%BC%A7%EF%BC%A1)](https://git.io/typing-svg)



 <img src="😂" height="90" width="100%">


# WORKFLOW CODE 👨‍💻
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start

