---
layout: detail
title: How to solve column must appear in the GROUP BY clause or be used in an aggregate function
date:   2018-07-21 22:00:00 +0300
categories: web-development
excerpt_separator: <!--more-->
---
Two months back I had a problem at work with one PostgreSQL queries. Whenever I was using was using GROUP BY I got "column must appear in the GROUP BY clause or be used in an aggregate function"

<!--more-->

The simple version of a problematic query:
{% highlight postgresql %}
    SELECT "as".* FROM address AS as, customer AS c WHERE as.customer_id = c.id GROUP BY as.id;
{% endhighlight %}

Using DISTINCT ON solved this error
{% highlight postgresql %}
    SELECT DISTINCT ON (as.id) "as".* FROM address AS as, customer AS c WHERE as.customer_id = c.id;
{% endhighlight %}