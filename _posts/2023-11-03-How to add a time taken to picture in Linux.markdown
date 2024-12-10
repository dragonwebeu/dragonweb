---
layout: detail
title: How to add a time taken to picture in Linux
date: 2023-11-03 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Here is simple way how add time take or file modifed to picture
<!--more-->

{% highlight bash %}
# 1
sudo apt install imagemagick
# 2
ls | awk '{print "convert "$0" -gravity SouthEast -pointsize 60 -fill orange -annotate +30+30 %[exif:DateTimeOriginal] dated_"$0}' | sh
{% endhighlight %}
