# Instructions for setup

### 1. Create new project

1. Create a repo for the new project.
  * Log into Anthead Digital GitHub account and create a repo for the repo project. Be sure to follow the naming scheme for book apps, for example: zimmybooks-[series]-[book name]

2. Clone template repo locally
  * ``` > git clone https://github.com/antheaddigital/zimmybooks-book-template.git ```
  * change the folder name from "zimmybooks-book-template" to the new project name
  * go into the the project folder

3. Change remote repo url.
  * ``` > git remote set-url origin [repo url] ```

4. Create staging branch
  * ``` > git checkout -b staging ```

---

### 2. Environment

The /js/environment.js file has the value for the environment.

The two environments are "production" and "staging".

  * "production" is on the master branch
  * "staging" is on the staging branch

This setting, and these exact values, are related to the Admob ad service. These exact values must be in the correct branch.

---

### 3. Images

Folders:

  * background: background.jpg
  * pages: all pages jpg's
  * signboxes: all sign boxes jpg's
  * signs: all sign jpg's

Sizes for images (in px's):

  * page: 1920 x 1280
  * sign: 300 x 300
  * background: 300 x 300

Naming scheme for pages:

  * intro: intro.jpg
  * title: title.jpg
  * page: [number].jpg
  * credits: credits.jpg
  * the end: the-end.jpg

All images should be jpg's (png's have larger file sizes than jpg's).

---

### 4. Slider html

Example of slide with sign:

```
  <div class="slider-page">
    <img src="imgs/pages/01.jpg" class="page-img img-responsive" />
    <a href="imgs/signs/broken.jpg" class="sign-link"><img src="imgs/signboxes/broken.jpg" class="img-responsive" /></a>
  </div>
```

Example of slide without sign:

```
  <div class="slider-page">
    <img src="imgs/pages/intro.jpg" class="page-img img-responsive" />
  </div>
```

---

### 5. Admob setup

---

### 6. Piwik setup

---

### Final points
* JS file that you should not touch:
  * /js/config.js
  * /js/main.js
