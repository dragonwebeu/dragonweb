---
layout: detail
title: postgres pgcrypto
date: 2024-02-22 00:00:00 +0000
categories: postgres
excerpt_separator: <!--more-->
---
postgres pgcrypto
<!--more-->


```
# 1
CREATE EXTENSION pgcrypto;
#2. encode string:
SELECT encode(pgp_sym_encrypt('my string to crypt'), 'hex') as encrypted_data;
# 3. 
SELECT pgp_sym_decrypt(decode('<crypted hash as string here>')
```