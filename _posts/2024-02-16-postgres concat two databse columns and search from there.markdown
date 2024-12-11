---
layout: detail
title: postgres concat two databse columns and search from there
date: 2024-02-16 00:00:00 +0000
categories: postgres
excerpt_separator: <!--more-->
---
postgres concat two databse columns and search from there
<!--more-->

```
SELECT * FROM employees
WHERE CONCAT(first_name, ' ', last_name) = 'John Doe';
```