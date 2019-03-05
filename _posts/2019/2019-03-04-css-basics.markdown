---
layout: post
title: CSS Basics
date: '2019-03-04 22:58'
posted: '2019-3-4'
reference: 'https://teamtreehouse.com/library/css-basics'
tags: CSS
category: front-end
---

## Types of styles
- Default Browser Styles: Default styles from the browser (e.g. Chrome), what make `<h1>` large and `<em>` bold, there are small but noticable variations between browser vendors (e.g. Chrome vs Internet Explorer).
- Author Styles: The styles you write and include on a page
- User Styles: Changes a user makes to how they view the page (e.g. font, text size, color)

## How to Add CSS to a Page

- inline: `<p style="color: red;">Some text</p>`
- internal: Uses the `<style>` tag inside of the `<head>` tag

```html
<style>
    p { color: red; }
</style>
```

- external: Links to an external file commonly named **styles.css** using the `<link>` tag inside of the `<head>` tag. `<link rel=stylesheet href=styles.css>`
- import: Can be used to break out styles into multiple files and then import them at the top of **styles.css**. `@import 'reset.css'`.
    - One common use case is a reset so the browser styles so that the author styles look the same in different browsers

## How CSS Works
- CSS *selects* HTML elements on a page and then changes particular properties to a specified value. For example
`p { color: red ;}` would make the text of all `<p>` elements red. In this example `p` is the *selector*, `color` is the property and `red` is the value, the entire thing `p { color: red ;}` is referred to as a *CSS rule*.

## Basic CSS selectors
- Universal `* { margin: 0;` }
- Type: `p { color: red;}`
- ID: `#main { margin: 10px; }`
    - Applying an id to an element: `<p id="main">Some text</p>`
- Class: `.sale { font-size: 30px;}`
    - Applying a class to an element `<p class="sale">Sale this Weekend</p>`
- Descendant: `#main p {font-size: 24px; }`
- Comment: /* I'm ignored by the browser */

**Tip: To practice CSS selectors check out [CSS Diner game](https://flukeout.github.io/){:target="blank"}

### IDs vs Classes
- IDs are unique on a page (e.g. there can only be one `#main` on a page)
- Classes can be applied to multiple elements.
- An element can only have 1 ID but can have 0 or more classes applied.
- IDs are **more specific** than classes so a rule with an id will override a rule with a class, for this reason id selectors should be used sparingly.

## Psuedo-classes
- link: `a:link { color: blue; }`
- visited: `a:visited { color: purple; }`
- hover: `button:hover { border: 5px solid; }`
- active: `button:active { background: lightgrey; }`
- focus: `button:focus { border: 5px solid; background: lightgrey; }`

### What element can I use with pseudo-classes
 - *link* and *visited* only work for `<a>` elements
 - *hover* and *active* can be used on any element
 - *focus* works on interactive elements like links, buttons and form fields.

### What is difference between *hover* and *focus*
- *hover* is only activated when it is pointed at, (e.g. using a mouse)
- *focus* is activated when an element **has focus**. Elements can received focus in a number of different ways, including tabing through fields on the form as well as being pointed at with a mouse.

## Styling Text
- align text: `div: { text-align: center; }` Also accepts: `left`, `right`, `justify`
- capitalize: `span: {text-transform: uppercase;}` Also accepts: `lowercase` and `capitalize`
- text decoration: `a: { text-decoration: none; }`  It also accepts `line-through`, `overline` and `underline`.  Commonly used to remove underlines from links or to strike through text.
- bold: `span: { font-weight: bold; }` also accepts `normal`.
- italics: `span: { font-style: italic; }` also accepts: `normal`
- font family: `p: { font-family: Arial; }`
- line height: `body{ line-height: 1.5}`
- font shorthand: `body { font: normal 1em/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif; }` weight, size, line height, font families.

## CSS Units
### Length Units
- `px`: Pixel, most common unit of measure.
- `%`: Percentages: used for sizing relative to their parent element.
- `em`: Relative to the width of an `m` of the font of the parent element. Useful for responsive typography.
- `rem`: Root em, Relative to *root* element of the page, instead of the parent element.

### Color Units
- color keywords (e.g `blue`)
- hex: `#ffffff`, hexadecimal (hex for short) is base-16 numbering system to cover more than 65 thousand possible color. hex values are by far the most common color system on the web.
- rgb: `rgb(255,165,0)`, rgb stands for shades of red, green and blue. rgb is on scale of 255 to 0.
- rgba: `rgb(255,165,0,0.3)` rgba, a stands for alpha channel and adds in opacity.

## Box Model
- Every element on a page, is displayed on the page as a rectangle. Elements can be displayed in various modes.
    - *block*: Element takes up entire line and forces a new line before and after. Examples include: `p`, `h1`, `div`
    - *inline*: Element only takes up as much space as their is content, they also do not have width or height Examples include: `a`, `span`
- The model model is made up of content, padding, borders and margins.
![CSS Box Model Diagram](images/2019/02/css-box-model-diagram.png) [source](https://hackernoon.com/css-box-model-45ecf4ac219e){:target="_blank"}.

- *padding*
- `div { padding-top: 20px; }` other variations: `padding-bottom`, `padding-right`, `padding-left`
- `div { padding: 5px 10px 5px 10px}` This adds 5 pixels to the top and bottom and 10px to left and right sides. When using this shorthand these values go clock-wise **top**, **right**, **bottom**, **left**, this can be further shorted to `div { padding: 5px 10px; }`.
- `div { padding: 20px; }` Add, 20px of padding all 4 sides of the box.
- *margin*: works the same as padding with one additional option `auto`. `.main { margin: 0 auto; }`, will center a every element element with class of main within their parent container with no top or bottom margin.
- *border*
- `div { border-style: solid; }` also accepts: `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`
- `div { border-size: 10px}` accepts any valid size.
- `div { border-color: orange; }` accepts any valid color.
- `div { border: 10px solid red; }`Which sets a red 10 pixel-wide border around all 4 sides of every `<div>`.  The order **must** be length, style color.
- Individual sides of a box can also be styled: `div { border-top: 3px solid #303030; }`
- *display*: `p.sale { display: inline}` which sets all `<p>` with a class of sale to be a `inline` instead of `block` elements. Also accepts: `none`, `inline`, `inline-block`.
- *width* : `div { width: 100px; }` accepts any valid size.
- *height*: `Works the same as width
- box sizing: `* { box-sizing: border-box; }` sets every element on the page to subtract padding and borders in the when calculating an elements width / height. Elements often have a `width` property declared, so by excluding padding it is more intuitive to set both width and padding. Note that `content-box` is the default value.
- max width: `body { max-width: 980px; }` Sets the body element to be no wider than 980 pixels, accepts any valid size.
- min width: `body { max-width: 480px; }` Sets the body element to be no narrower than 480 pixels, accepts any valid size.

### What is the difference between *padding* and *margin*?
- *Padding* increases the size of the box where *margin* pushes other elements away from the box.

### What exactly is `inline-block`?
- *inline-block* elements behave the same as inline elements except they have width and height, so amargin and padding can be applied to them.

### What happens to an element which has `display: none` applied to it?
- The element no longer takes up any space on the page.

### What is the purpose of *max-width* and *min-wdith*?
- They are used to keep a design from setting too stretched out on a large screen or too scrunched together on a small screen. They are very useful when combined with with percentages such as `.container { width: 80% }`

## Shadows and Rounded Corners
- Shadows
- *text shadow*: `div { text-shadow: 1px 1px 2px #e0e0e0}`. The first two values are horizontal / vertical *offset*, the third value is the *blur radius*, they all accept any valid length value. the fourth value accepts any valid color value .
- *box shadow*: `div { box-shadow: 5px 5px 7px 10px #e0e0e0}`. Values are the same as `text-shadow` except for the fourth value which is the *spread distance* which is optional.
- Rounded corners: `div { border-radius: 3%}`,  border radius defines how rounded a corner is. Since every element is a rectangle to make other shapes you can use `border-radius` for example `border-radius: 50%` will produce a circle. *border-radius* supports the same shorthand as *border*, it supports styling a single side, all 4 sides separately, or top / bottom & left / right.

## Media Queries
Media Queries can be used to style a page based on properties of the browser's viewport *max-width*, device device orientation, device type (e.g. `screen` vs `print`), device width, resolution or pixel ratio. Style rules are placed inside of the media query and are only applies when the media query is evaluated to true.

- Simple 3 column layout
```CSS
@media only screen and (min-width: 1520px) { .column{ width: 33%; } }
@media only screen and (max-width: 1525px) { .column{ width: 50%;  } }
@media only screen and (max-width: 1055px) { .column{ width: 100%; } }
```
