# hi
<div align="center">
# සැ.යු.     ```සැලකිය යුතුයි : ඉහත සදහන් වචන පමනක් බේස් එක තුල වෙනස් කර ගන්න



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

