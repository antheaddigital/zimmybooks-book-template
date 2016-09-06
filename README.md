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

The /js/environment.js file has the value for the environment. Set value for: ``` window.appEnvironment ```.

The two different environments values are "production" and "staging":

  * "production" is on the master branch
  * "staging" is on the staging branch

These exact values must be in the correct branch.

This setting is used in the settings for the Admob ad service and Piwik tracking. On staging, the Admob services is going to display a test ad, and Piwik tracking is going to effect the test tracking account.

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
  * page: [story page number].jpg
  * credits: credits.jpg
  * the end: the-end.jpg

All images should be jpg's (png's have larger file sizes than jpg's).

---

### 4. Slider html

Example of intro page:

```
  <div class="slider-page">
    <img src="imgs/pages/intro.jpg" class="page-img img-responsive" />
  </div>
```

Example of slide with sign (notice the file name of the page: [story page number].jpg):

```
  <div class="slider-page">
    <img src="imgs/pages/01.jpg" class="page-img img-responsive" />
    <a href="imgs/signs/broken.jpg" class="sign-link"><img src="imgs/signboxes/broken.jpg" class="img-responsive" /></a>
  </div>
```

Example of credit page:

```
  <div class="slider-page">
    <img src="imgs/pages/credits.jpg" class="page-img img-responsive" />
  </div>
```

Example of end page:

```
  <div class="slider-page">
    <img src="imgs/pages/the-end.jpg" class="page-img img-responsive" />
  </div>
```

---

### 5. Set ad pop up page:

This step is for setting the page that the Admob ad will pop up on.

1. Open file: /js/settings.js
2. Set the value of: ``` window.appSettings.creditsSlide ```, as the page number of the credits page.

The first page of the book, usually the intro page, is considered slide 0(zero). When testing, make sure the ad pops up when the user gets to the credit page.

In theory, any page can act as the the page that the ad pops up on, but for usability purposes the plan is to have the ad pop up after the user finishes the story and gets to the credits page.

---

### 6. Admob setup

Setting up Admob is a 2 step process.

#### 1. Create the ad units in the Admob admin

  1. Log into the Anthead Digital Admob account.
  2. On the Monetize tab, click on the "+ Monetize New App" button.
  3. On the "Monetize a new app" page, select these option for each step:
    1. Select an app
      * On the "Add Your App Manually" tab


#### 2. Apply the ad unit id's to the settings.js file


```
  window.appSettings
```

---

### 7. Piwik setup

---

### Final points
* There is no reason to edit these CSS files:
  * /css/main.css
  * /css/reset.css
* Do not edit these JS files:
  * /js/config.js
  * /js/main.js
