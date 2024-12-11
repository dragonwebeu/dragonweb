---
layout: detail
title: Rails Tabeless model
date: 2024-02-29 00:00:00 +0000
categories: rails
excerpt_separator: <!--more-->
---
Rails Tabeless model
<!--more-->

```
class Tableless < ActiveRecord::Base
  class_attribute :columns
  self.columns = []

  def self.column(name, sql_type = nil, default = nil, null = true)
    columns << ActiveRecord::ConnectionAdapters::Column.new(name.to_s, default, sql_type.to_s, null)
  end
end
```
