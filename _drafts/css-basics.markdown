---
layout: "post"
title: "css-basics"
date: "2019-02-23 17:21"
---

## Intro to CSS
    CSS uses selectors to target parts of a page to style. HTML can be applied it 3 ways: **inline**, **internal**, **external**. In almost every case an external style sheet is strongly recommended. An external stylesheet can be referenced using **link** tag `<link rel="stylesheet" href="style.css">` inside the **head** tag.

    To style a `<p>` use an **element selector** `p: {color: red ;}`. If you want to style different paragraphs differently you can add a class to the HTML of the element to specify which paragraphs to add a specific style to `<p class="main-pg">Text goes here</p> and then style those elements using a **class selector** `.main-pg: {background: green; }`. Multiple HTML elements can be styled with the same class by adding class the HTML of the desired elements.


    You can use **padding** to increase the size of an element on the page `padding: 10px;`. You can use margin to increase to space between elements `margin: 20px;`. Margins and padding are often denonted in **px* for pixels. Another common unit of space is **em** and is used frequently with typography and responsive design.
