---
layout: detail
title: Linux install dig
date: 2024-02-28 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Linux install DIG
<!--more-->

```
# 1.
apt install dnsutils
# 2.
dig  mydomain
```

example:

```
henry@development:~$ dig dragonweb.eu

; <<>> DiG 9.16.50-Debian <<>> dragonweb.eu
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60687
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 3

;; QUESTION SECTION:
;dragonweb.eu.			IN	A

;; ANSWER SECTION:
dragonweb.eu.		17	IN	A	192.30.252.154
dragonweb.eu.		17	IN	A	192.30.252.153

;; ADDITIONAL SECTION:
info.portmaster.	0	IN	TXT	"accepted: allowing dns request"
info.portmaster.	0	IN	TXT	"freshly resolved by Cloudflare (dot://cloudflare-dns.com:853#config)"
info.portmaster.	0	IN	TXT	"record valid for 30m0s"

;; Query time: 48 msec
;; SERVER: 192.168.0.232#53(192.168.0.232)
;; WHEN: Tue Dec 10 23:49:34 EET 2024
;; MSG SIZE  rcvd: 290
```