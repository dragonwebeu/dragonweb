---
layout: detail
title: Postgres get row below
date: 2024-02-06 00:00:00 +0000
categories: postgres
excerpt_separator: <!--more-->
---
Postgres get row below
<!--more-->

```sql
SELECT column1, LEAD(ended_date) OVER (ORDER BY id DESC) AS last_row_ended_date, 
	LEAD(id) OVER (ORDER BY id DESC) AS last_row_id
FROM my_table
```