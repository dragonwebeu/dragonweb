---
layout: detail
title: Run postgres database in Docker
date: 2024-01-06 00:00:00 +0000
categories: rails
excerpt_separator: <!--more-->
---
Rails ActiveRecord::Batches aka find in batches
<!--more-->

## Rails find_in_batches
{% highlight ruby %}
Person.find_in_batches.with_index do |group, batch|
  puts "Processing group ##{batch}"
  group.each(&:recover_from_last_night!)
end
{% endhighlight %}

## Rails in_batches
{% highlight ruby %}
Person.in_batches.each do |relation|
    relation.update_all('age = age + 1')
    relation.where('age > 21').update_all(should_party: true)
    relation.where('age <= 21').delete_all
end
{% endhighlight %}
