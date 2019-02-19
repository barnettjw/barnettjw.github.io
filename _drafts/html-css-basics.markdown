---
layout: post
title: HTML-CSS-Basics
date: '2019-02-18 20:47'
reference: https://teamtreehouse.com/library/introduction-to-html-and-css
---

A web page is made off 3 parts:

- HTML: Structure or Content
- CSS: Presentation or Style
- JavaScript: Behavior or Interactivity

## Basic Structure of a Web Page

- `<!DOCTYPE html>`: Tells browser what kind of information is on a page
- `<html>`: Parent or root tag, all other tags are child tags of `<html>`
- `<head>`: Contains title, links to CSS stylesheets and metadata
- `<title>`: Title of the page, appears on the browser tab and in search results
- `<body>`: Content of the web pages

## Basic HTML Tags

- Images: `<img src="/path/to/img.jpg" alt"image">`
- Paragraphs: `<p>Text goes here</p>`
- Links: `<a href="http://teamtreehouse.com">Treehouse</a>`
    - Images can be used as links by nesting
    ```html
    <a href="http://teamtreehouse.com">
        <img src="/path/to/img.jpg" alt"image">
        Treehouse
    </a>
    ```
    - Links can also go to different part of the same pages
    `<a href="#top">Go to the Top</a>`
- Unordered Lists (e.g. bullet points):
    ```html
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
    </ul>
    ```
- Ordered Lists: (e.g. numbered (or lettered) lists)
    ```html
    <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
    </ol>
    ```

## Intro to CSS
    CSS uses selectors to target parts of a page to style. HTML can be applied it 3 ways: **inline**, **internal**, **external**. In almost every case an external style sheet is strongly recommended. An external stylesheet can be referenced using **link** tag `<link rel="stylesheet" href="style.css">` inside the **head** tag.

    To style a `<p>` use an **element selector** `p: {color: red ;}`. If you want to style different paragraphs differently you can add a class to the HTML of the element to specify which paragraphs to add a specific style to `<p class="main-pg">Text goes here</p> and then style those elements using a **class selector** `.main-pg: {background: green; }`. Multiple HTML elements can be styled with the same class by adding class the HTML of the desired elements.


    You can use **padding** to increase the size of an element on the page `padding: 10px;`. You can use margin to increase to space between elements `margin: 20px;`. Margins and padding are often denonted in **px* for pixels. Another common unit of space is **em** and is used frequently with typography and responsive design.

## Simple Web Pages

    ```HTML
    <!DOCTYPE html>
    <html>
        <head>
            <title>This is a Web Page</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>Title of Page</h1>
            <h2>Section Heading</h2>
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
            </ul>
        </body>
    </html>
    ```

    ```CSS

    ```
