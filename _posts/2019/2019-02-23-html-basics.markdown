---
layout: post
title: HTML Basics
date: '2019-02-23 18:31'
posted: '2019-02-23 18:00'
reference: 'https://teamtreehouse.com/library/html-basics-2'
tags: HTML
category: front-end
---

Notes on basic **HTML** tags.

## Basic Structure of a Web Page
- `<!DOCTYPE html>`: Tells browser what version of HTML you are using
- `<html>`: Parent or root tag, all other tags are child tags of `<html>`
- `<head>`: Contains title, links to CSS stylesheets and metadata
- `<title>`: Title of the page, appears on the browser tab and in search results
- `<body>`: Content of the web pages

## Basic HTML Tags
- Headings: `<h1>Heading 1</h1>`
    - HTML supports various heading levels h1 - h6 ( h1 to h3 are most commonly used)
- Paragraphs: `<p>Text goes here</p>`
- Comment: `<!-- This is a comment and is not displayed -->`
- Links: `<a href="http://teamtreehouse.com">Treehouse</a>`
    - Links can also go to different part of the same pages
    `<a href="#top">Go to the Top</a>`
    - Links can open in a new window / tab
    `<a href="http://teamtreehouse.com target="_blank">`
    - Email link
    `<a href="mailto:test@example.com">test@example.com</a>`
- Images: `<img src=path/to/treehouse-logo.jpg alt="Green Hexagon with foot of a tree frog" title="Treehouse Logo">`
- Caption Images:
    <figure>
        <img src=path/to/treehouse-logo.jpg alt="Green Hexagon with foot of a tree frog">
        <figcaption>Treehouse Logo</figcation>
    </figure>
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

- Line Break: `<br>`
- Horizontal Rule: `<hr>`
- Address

```html
<address>
    123 Main St<br>
    New York NY 20001
</address>
```

- Important Text: `<strong>Important Text</strong>`
- Emphasis Text: `<em>Book Title</em>`
- Small text: `<small>Legal Disclaimer here</small>`
- Block-level division: `<div>I'm a block of text</div>`
- Inline division: `<span>Highlight me</span>`

### Block vs Inline elements
`<div>` and `<span>` are used as "hooks" for styling elements, the browser applies no default styles to them. The difference between them is that `<div>` is a *block-level element* where as `<span>` is an *inline element*. Block level elements take up an entire line where as inline elements do not.

## Simple Web Pages

```html
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
