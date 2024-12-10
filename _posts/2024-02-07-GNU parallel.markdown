---
layout: detail
title: GNU parallel
date: 2024-02-07 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
GNU parallel
<!--more-->

```
sudo apt install parallel
```

```
parallel echo {} ">" {}.txt ::: {1..20}
```

https://www.gnu.org/software/parallel/parallel_examples.html
