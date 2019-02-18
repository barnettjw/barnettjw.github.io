---
layout: post
title: How I Setup This Blog
date: 2018-02-17
last_updated: 2018-02-18
---

Setting up a blog hosted on [GitHub pages](https://pages.github.com/) (like this one) can be done with only a GitHub account. Posts can be written in markdown using [github.com](https://github.com). To create the page you are reading now I started by creating a basic Github pages site. One of the easiest ways to do that is to `fork` the `barryclark/jekyll-now` repository (repo for short) on Github. Once I forked that repo, I renamed  the repo from `jekyll-now` to `barnettjw.github.io` (the url you used to get here).

This post is a detailed list of the steps I used to make this blog, it is divided into 2 parts, **Basic Github Pages Setup** and **Setting up a Jekyll Local Development Environment**. All you need is a Github account, if you don't already have a Github account you can create at [github.com](https://github.com/). On Github pages all content is written using Markdown. If you are new to Markdown or just need a refresher, you can check out [this guide on mastering Markdown](https://guides.github.com/features/mastering-markdown/).

For basic markdwon editing, you can use any markdown editor which has a live preview. If you choose to setup a Jekyll local development environment, I recommend using Atom with a few markdown add-ons. Setting up a local development environment is optional, allows you to edit themes and hava draft posts, for that setup you will need a few more tools.

## Basic Github Pages Setup

### Creating a user-based github page

1. Sign into your [Github](https://github.com) account
2. Go to the [barryclark/jekyll-now](https://github.com/barryclark/jekyll-now) repository and click on the **Fork** button .
3. In your new repository click *Settings*
4. Rename your repository to `<github username>.github.io`
    * This naming scheme is required for github to recognize your repository is a user github pages repository, which is a pre-requsite for using **jekyll-now**.
5. Scroll down to Github pages section. You should see
    >  Your site is published at `https://<your github username>.github.io/``
6. Go to `https://<your github username>.github.io/` to check out your new site

### Basic configuration

Now you can edit the `_config.yml` right on Github and then commit the edits. In a few seconds your site will be updated. You can follow this up with editing  `about.md` and `/_posts/2014-3-3-Hello-World.md` files. For your about page and first post respectively. Make sure to rename `2014-3-3-Hello-World.md` to the current date, sticking to the same format.

## Setting up a Jekyll Local Development Environment

Now that you've got your github pages site up and running you may want to setup Jekyll locally. There are 2 main use cases for setting up Jekyll locally, drafts and theming. If you want to style a theme without having to commit a file to Github after each CSS tweak. Also if you want to be able to preview your drafts you would need to do that locally.

### Install Development Tools

1. Install [Sourcetree](https://www.sourcetreeapp.com/)
    - I prefer Sourcetree over Github Desktop because atom has bettwe diagrams and statuses.
2. Install [Atom](https://atom.io/)
    * Install atom packages
        * **markdown-preview**
        * **markdown-writer**
        * **language-markdown**

### Install `github-pages` ruby gems

1. Install Ruby
    - On Windows
        - Install [Choclatey](https://chocolatey.org/)
        - `choco install ruby -y`
    * On Mac
        - Install [Home Brew](https://brew.sh/)
        - `brew install ruby`
        - `gem install rubygems-update`

2. `gem install github-page`

## Local Setup
### Clone your repository

1. Open Sourcetree
2. Add your Github account
3. Clone your `jekyll-now` repository
4. Click on `Open in File System`

### Launch Jekyll locally

1. Open terminal / powershell
2. Navigate to location of your repository
3. `jekyll serve --watch`
4. View [http://127.0.0.1:4000](http://127.0.0.1:4000) in your browser

### Edit files locally
1. Open Atom
2. Open folder to the location of your repository
3. Edit files
4. Check out the changes locally
5. Authorize GitHub for Atom
6. Commit and push your changes
7. View `https://<your github username>.github.io/` in your browser to see your changes

## Additional Resources
* [Build a GitHub-Hosted Blog with Jekyll Now](https://www.hongkiat.com/blog/jekyll-now)
* [How to Create a Blog with Jekyll – A Beginner’s Guide](https://www.hongkiat.com/blog/blog-with-jekyll/)
* [How to Manage Git and GitHub Projects with Atom](https://www.hongkiat.com/blog/manage-git-github-atom/)
* [Jekyll Offical Documentation - Posts](https://jekyllrb.com/docs/posts/)

    ##### [Orginial Article](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/) by Creator of Jekyll Now
