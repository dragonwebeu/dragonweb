---
layout: detail
title: Run postgres database in Docker
date: 2024-02-02 00:00:00 +0000
categories: docker
excerpt_separator: <!--more-->
---
Here is command how to create docker postgres container with custom port
<!--more-->
So I need diffrent port than default 5432 here is how I did it.


{% highlight bash %}
docker run -d --name docker-postgres-db --restart always -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -v /db:/var/lib/postgresql/data -p 5435:5432 postgres
{% endhighlight %}
