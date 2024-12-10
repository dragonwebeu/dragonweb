---
layout: detail
title: Linux jq command
date: 2024-05-02 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Linux jq command
<!--more-->

Create file:
nano test
```
{"hello": 4}
{"hello": 5}
{"hello": 6}
{"hello": 7}
{"hello": 8}
```

```
cat test | jq 'select(.hello > 5)'
```