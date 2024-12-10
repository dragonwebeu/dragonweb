---
layout: detail
title: debian strech source fix 2023
date: 2024-01-25 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
debian strech source fix 2023
<!--more-->

{% highlight bash %}
deb http://archive.debian.org/debian/ stretch main
deb-src http://archive.debian.org/debian/ stretch main

deb http://archive.debian.org/debian-security stretch/updates main
deb-src http://archive.debian.org/debian-security stretch/updates main

# stretch-updates, previously known as 'volatile'
deb http://archive.debian.org/debian/ stretch-updates main
deb [arch=amd64] https://download.docker.com/linux/debian stretch stable
# deb-src [arch=amd64] https://download.docker.com/linux/debian stretch stable
deb-src http://archive.debian.org/debian/ stretch-updates main
{% endhighlight %}
