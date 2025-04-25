# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Building the structure of the website in html.
- Extracting the fonts and color pallet from style guied file.
- Then stlye the web page by css.
- Finally adding the javascript code to make the page come to life.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

- I learned how to call a fuction when clicking on any element of an array, before I did this project I was't able to do it in this simple way.

```js
options.forEach(e => {
    e.addEventListener("click", function () {
        options.forEach(element => {
            element.classList.remove("active");
        });
        e.classList.add("active");
        check = true;
        number.innerHTML = e.getAttribute("n");
    })
});

```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Facebook - [@yourusername](https://www.twitter.com/yourusername)