---
layout: detail
title: Linux get lines from file
date: 2024-04-08 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
How to get lines count from file in Linux.
<!--more-->

Get file row count from Linux

{% highlight bash %}
# Simple version
less /var/log/mylog.log | wc -l
{% endhighlight %}

Here is if you want the occurence of something

{% highlight bash %}
# Simple version
less /var/log/mylog.log | grep 'searc something' |  wc -l
{% endhighlight %}