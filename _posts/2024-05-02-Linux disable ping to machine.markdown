---
layout: detail
title: Linux disable ping to machine
date: 2024-05-02 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Linux disable ping to machine
<!--more-->

{% highlight bash %}
# /etc/sysctl.conf or /etc/ufw/sysctl.conf
net.ipv4.icmp_echo_ignore_all =1
{% endhighlight %}
