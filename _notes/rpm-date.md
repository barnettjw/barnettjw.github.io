---
layout: note
title: list rpms by date
date: '2019-03-17'
category: linux-command
tag: [rpm, grep]
---
Command  |  Description
--|--
`rpm -qa --queryformat "Package: %{NAME} \t Version: %{VERSION} \t Installed: %{INSTALLTIME:date}\n" | grep $_DATE`{:.bash}  |  get a list of packages installed on a certain date (date format: 19 Mar 2019)
`rpm -qa --queryformat "%{NAME}-%{VERSION}.%{RELEASE} INSTALLED: %{INSTALLTIME:date}\n" | grep "$(date +"%b %Y")"`{:.bash}  |  print packages installed this month
