---
layout: detail
title: Ruby read hexidecimal
date: 2024-02-18 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Ruby read hexidecimal
<!--more-->

```
# Your hexadecimal string
hex_string = "68656c6c6f"

# Decode the hexadecimal string
decoded_string = [hex_string].pack("H*")

# Output the decoded string
puts decoded_string
```