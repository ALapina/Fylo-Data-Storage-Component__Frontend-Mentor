# Frontend Mentor - Fylo data storage component

![Design preview for the Fylo data storage component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

**To do this challenge, you need a basic understanding of HTML, CSS and a tiny bit of JavaScript.**

## The challenge

Your challenge is to build out this data storage component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

_________________________________

## Challenging parts

> I took this challenge and pushed it to be even more challenging
> by making the slider **interactive**! Try to move it!

![Animated slider](challenge.gif)

### Styles

Mostly all Pseudo-elements for input type range is non-standard. And
does not work the same in all main browsers.

For Mozilla Firefox we can just add linear-gradient with Pseudo-elements ::-moz-range-progress. But this solution works only in Mozilla Firefox, so we need to find more robust solution.

### Adding interactivity

The hardest part in this small project was to make range slider with linear-gradient to change background color based on the thumb position.

1. Pure CSS solution. Hide the overflow from input range, and fill all the space left to thumb with box-shadow color. [Stackoverflow](https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider). But we can't make box-shadow with linear-gradient. 

2. The second solution I found suggested using simple JS to change the percentage of how much each color takes on the linear-gradient background of the slider. [BananaCoding](https://www.youtube.com/watch?v=BrpiNUf2XCk&ab_channel=BananaCoding). So second solution works fine for this case.

However, with this solution I ran into a very small visual bug. In some point background slider is moving on 1 pixel faster or slower then thumb. ![](/images/small%20slider%20background%20bug.png)

The simplest solution I came up with was to add a small fix with an if statement to add or remove one pixel at specific values.

Probably there is a better solution to this problem or we can somehow calculate the precise thumb position. But for this challenge it seems to work fine. So if you have a suggestion to this problem, please leave a comment.