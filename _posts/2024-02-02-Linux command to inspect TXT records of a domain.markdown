---
layout: detail
title: Linux command to inspect TXT records of a domain
date: 2024-02-02 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Linux host command for see quickly domain dns records.
<!--more-->
You need to know which subdomain to look for, for example **_dmarc**

{% highlight bash %}
host -t txt _dmarc.dragonweb.eu
{% endhighlight %}

Here is example how to how get quickly spf record:
{% highlight bash %}
henry@development:~$ host -t txt dragonweb.eu
dragonweb.eu descriptive text "v=spf1 a mx include:mail.spf.elkdata.ee include:spf.mail.meeldetuletus.ee -all"
{% endhighlight %}
