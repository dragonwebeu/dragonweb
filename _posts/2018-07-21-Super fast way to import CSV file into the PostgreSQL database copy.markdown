---
layout: detail
title: Super fast way to import CSV file into the PostgreSQL database
date:   2018-07-21 22:35:00 +0300
categories: web-development
excerpt_separator: <!--more-->
---
I usually used  CSV gem to import each row to the database but it long and a really stupid way to do it. 
After some research, I found that PostgreSQL has /copy command which is super fast and easy to use. 
<!--more-->
I had CSV file with a little bit more than 1.2 million rows and importing that with copy command took 10-15 seconds max.

{% highlight ruby %}
@db_connection.exec("
  CREATE TABLE sihtnumbrid (
    ADR_ID varchar(255),
    SIHTNUMBER varchar(255),
    LAHIAADRESS varchar(255),
    TAISAADRESS varchar(255)
  );
")

@db_connection.exec("COPY sihtnumbrid(ADR_ID, SIHTNUMBER, LAHIAADRESS, TAISAADRESS) FROM '#{file}' WITH DELIMITER ';' CSV HEADER")
{% endhighlight %}

Here is code for remote server
{% highlight ruby %}
exec "PGPASSWORD=mypassowrd psql -h 127.0.0.1 -p 5444 -d database-name-here -U username-here -c \"\\COPY eesti_aadressid(ADR_ID, SIHTNUMBER, LAHIAADRESS, TAISAADRESS) FROM STDIN WITH DELIMITER ';' CSV HEADER\" < #{file}"
{% endhighlight %}
