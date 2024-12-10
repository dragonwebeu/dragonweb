---
layout: detail
title: Linux show if hard drive is HDD or SSD
date: 2024-02-04 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Linux show if hard drive is HDD or SSD
<!--more-->

```
# 1 - SSD 
# 2 - HDD
cat /sys/block/sda/queue/rotational
```
