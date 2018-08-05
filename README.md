LatexServer
===
A server to provide image from **LateX** formulas

 Provides a simple image server to respond an API and render formulas as images

# Table of Contents
* [How it Works](#how-it-works)
* [Install and Dependencies](#install-and-dependencies)
* [Start](#start)


# How it Works
 - Get a formula LateX tha you want: `x^2 + 0x - 9 = 0`
 - urlencode it `x^2 + 0x - 9 = 0` turn `x%5E2%20%2B%200x%20-%209%20%3D%200`
 - repace it in a templated path `/formula/{urlencoded_latex}/size/{size}`


```html
 <img src="http://localhost:9292/formula/x%5E2%20%2B%200x%20-%209%20%3D%200/size/5" >
```
renders:

<img src="./example.png">

# Install and Dependencies

System dependencies:

```bash
$ sudo apt-get install imagemagick libmagickcore-dev

$ sudo apt-get install texlive texlive-latex-extra

$ sudo apt-get install texinfo
```

Install node modules
```bash
# in project root path
$ npm install

```

# Start
In port 9292 for example
```bash
$ PORT=9292 npm start
```


