---
layout: detail
title: Iptabel block IP
date: 2024-04-10 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Iptable block IP
<!--more-->

{% highlight bash %}
iptables -A INPUT -s 192.168.0.100 -j DROP 
{% endhighlight %}
