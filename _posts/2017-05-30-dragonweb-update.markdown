---
layout: detail
title:  DragonWeb new site with no CMS. What madness is this?
date:   2017-05-30 14:55:12 +0300
categories: news
excerpt_separator: <!--more-->
---

Many of you who read this and visit my site are from CMS Made Simple website thanks to the template I made a long time ago.

I strongly believe many of you and others do not need any Content management system (CMS), small company websites, blogs should use Jekyll or something similar for cheaper costs and for security. Content management system like Wordpress etc. are hackers paradise! Customer or user usually does not know how to update a website or lack money and skill to so after setting up CMS.
<!--more-->
I currently use no CMS and plan to not do it in the future, I can host my site for FREE in GitHub or in Bitbucket and pay for my domain only!

A website with a blog, search functionality and no CMS, what madness is this?!
A simple answer is [Jekyll](https://jekyllrb.com/)

Static website means no database, no content management system - which makes your site faster & more secure. 
+ Blog posts are done with markdown. 
+ Instant search is done with a Vue.js
+ sitemap.xml is generated with Jekyll.
### Here is how to install Jekyll

{% highlight bash %}
    ~ $ gem install jekyll bundler
    ~ $ jekyll new <enter your folder name here>
    ~ $ bundle excec jekyll serve
    # => Now browse to http://localhost:4000
{% endhighlight %}

*Updated: 21-07-2018*