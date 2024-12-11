---
layout: detail
title: Ruby to bytecode
date: 2023-11-26 00:00:00 +0000
categories: ruby
excerpt_separator: <!--more-->
---
```ruby
byte_code = RubyVM::InstructionSequence.compile_file('/home/henry/somefile.rb')
File.binwrite('/home/henry/bytecode', byte_code.to_binary)
```