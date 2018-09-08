---
layout: detail
title:  Rails custom validation
date:   2018-07-21 16:20:00 +0300
categories: web-development
excerpt_separator: <!--more-->
---
This is how make own custom rails validation with traslation
<!--more-->

{% highlight rails %}
    errors.add(:base, I18n.t(:vola_summa_vigane)) if @amount <= 0.00
{% endhighlight %}
On Error display's full_message => message only 
{% highlight rails %}
    errors.add(:amount, I18n.t(:vola_summa_vigane)) if @amount <= 0.00 =>
{% endhighlight %}
On Error display's  "attribute - message"
