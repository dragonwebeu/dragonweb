---
layout: detail
title: Postgres find multiple connections by username
date: 2024-02-28 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Postgres find multiple connections by username
<!--more-->

```
SELECT usename as username, 
	   count(pid)       
FROM pg_stat_activity
GROUP BY usename
ORDER BY count DESC;
```