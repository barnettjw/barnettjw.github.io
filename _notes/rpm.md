---
layout: note
title: rpm
date: '2019-03-17'
category: linux-command
tag: [rpm, grep]
---
| Command                        | Description                                                    |
|:-------------------------------|:---------------------------------------------------------------|
| `rpm -ivh  $_FILE.rpm`{:.bash} | install package                                                |
| `rpm -ivh $_URL.rpm`{:.bash}   | instal package via url                                         |
| `rpm -qa                       | grep -i '$_STRING'`{:.bash}  |  search for a installed package |
| `rpm -qa --last`{:.bash}       | list packages by install date (newest first)                   |
