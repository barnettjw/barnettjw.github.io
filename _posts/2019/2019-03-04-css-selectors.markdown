---
layout: post
title: css-selectors
date: '2019-03-04 22:58'
posted: '2019-03-04'
reference: 'https://teamtreehouse.com/library/css-selectors'
tags: CSS
category: front-end
---

## Child Selectors
- Descendant: `#main p {font-size: 24px; }` Targets all `<p>` elements that are nested inside of the `#main` element.
- Direct Child: `.sale > span { font-weight: bold; }` Targets any `<span>` element nested directly inside of any element `.sale` applied. Unlike the descendant selector, the span must be directly inside of `.sale`.
- Adjacent Sibling: `.sale + p { color: red; }` Targets any `<p>` that **immediately follows** an element with `.sale` applied.
- General Sibling: `.sale ~ p { color: red; }` Targets any `<p>` that follows an element with `.sale` applied.

### What is a CSS *combinator*?
- A *combinator* is the symbol between 2 elements.
- There are 4 combinators in CSS.
    - *descendant selector* ` `
    - *child selector* `>`
    - *adjacent sibling selector* `+`
    - *general sibling* selector `~`

## Pseudo-Classes
- First Child: `p:first-child { margin-right: 10px; }`, Targets the first `<p>` child of any element.
- Last Child: `div:last-child { margin-bottom: 50px; }`, Works the same as first child but for the last child element.
- Only Child: `div span:only-child { margin: 10px;}`, Targets a `<span>` that is the only element inside of a `<div>`.
- Empty: `:empty` targets any element no content or child elements.

## Attribute selectors
- Equals: `input[type="submit"] { background: lightgrey; }`
    - Styles an element based on the value of a particular attribute, also supports existence of an an attribute as well as multiple attributes in the same rule.
- Begins with: `a[href^="https://"] { color: goldenrod; }`, Targets any link whose `href` begins with `https://`
- Ends with: `a[href$=".html"] { color: lightblue; }`, Targets any link whose `href` ends in `.html`
- Contains: `img[src*="preview"] { width: 100%; }`, Targets any image whose `src` contains the word `preview`

## Pseudo-Elements
- Pseudo-elements allow for targeting content on the page without targeting a particular element. Pseudo-elements serve 2 functions in CSS.
    - Selecting first line / first letter of an element
    - Inserting virtual elements before / after a targeted element
- First line: `p::first-line { font-variant: small-caps; }`, target first line of text in every `<p>` element.
- First letter: `p::first-letter { font-size: 2em; }`, target the first letter of text in every `<p>` element to create what is known as a *drop cap* as it drops below the baseline of the text.
- Before: `a[href^="mailto:"]::before { content: "\2709"; }`, Places an envelope icon in front of any `mailto:` links.
- After: Works similar to how `::before` and puts the inserted content after the targeted element.
- **Note:** Pseudo-elements use `::` whereas pseudo-classes use `:`

## nth-child
- Target Specific Number: `li:nth-child (n+3) { background: red; }`, Targets the 3rd `<li>` of any element.
- Target Every `<li>`, starting with the third `<li>`, `li:nth-child (n+3) { background: red; }`
- Target every other `<li>`
    - Starting from the 1: `li:nth-child (2n+1)` or more simply `li:nth-child(odd)`
    - Starting from 0: `li:nth-child (2n+0)` or more simply `li:nth-child(even)`
- Target every second `<li>`, starting from the third `li:nth-child (2n+3)`
- Target the first 2 `<li>`s, `li:nth-child(-n+2)`
- Target the third to ninth ``<li>`s, this can be done by combining 2 selectors into One
    - First, target every `<li>` starting with the fourth, `li:nth-child(n+4)`
    - Second, target every `<li> starting from the the eighth, `li:nth-child(-n+8)`
    - These can be combined together `li:nth-child(n+4):nth-child(-n+8)`

### nth-of-type
- Works the same as `nth-child`, to target the third `<li>`, `li:nth-of-type(3) { background: red; }`

## Other Advanced Selectors
- Disabled: `input: disabled { background: grey; }`, Targets any element that is *disabled*.
- Checked: `:checked { border: 3px solid lightgreen; }`, Targets any element that is *checked*
- Root: `:root { margin: 20px; }`, Targets the element at the *root* of the document, in HTML that is `<html>`, CSS can be used on files other than HTML such as SVG and XML though.
- Target: When using *id*s links inside the same page, `:target` can target the element that has the *id* in the link. `#nav:target { background: lightgrey; }`
- Not: `input:not([type="button"]) { border: none; }`, Targets all non-button input elements.
