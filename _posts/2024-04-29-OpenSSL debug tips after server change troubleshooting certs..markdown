---
layout: detail
title: OpenSSL debug tips after server change troubleshooting certs.
date: 2024-04-29 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
OpenSSL debug tips after server change troubleshooting certs.
<!--more-->

A useful command to validate cert problem on the server after upgrading from the old server to the new and newer OpenSSL.

```
OpenSSL 1.1.1f  31 Mar 2020
built on: Fri Feb 16 15:41:31 2024 UTC
platform: debian-amd64
options:  bn(64,64) rc4(16x,int) des(int) blowfish(ptr) 
compiler: gcc -fPIC -pthread -m64 -Wa,--noexecstack -Wall -Wa,--noexecstack -g -O2 -fdebug-prefix-map=/build/openssl-ANcB0E/openssl-1.1.1f=. -fstack-protector-strong -Wformat -Werror=format-security -DOPENSSL_TLS_SECURITY_LEVEL=2 -DOPENSSL_USE_NODELETE -DL_ENDIAN -DOPENSSL_PIC -DOPENSSL_CPUID_OBJ -DOPENSSL_IA32_SSE2 -DOPENSSL_BN_ASM_MONT -DOPENSSL_BN_ASM_MONT5 -DOPENSSL_BN_ASM_GF2m -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DKECCAK1600_ASM -DRC4_ASM -DMD5_ASM -DAESNI_ASM -DVPAES_ASM -DGHASH_ASM -DECP_NISTZ256_ASM -DX25519_ASM -DPOLY1305_ASM -DNDEBUG -Wdate-time -D_FORTIFY_SOURCE=2
OPENSSLDIR: "/usr/lib/ssl"
ENGINESDIR: "/usr/lib/x86_64-linux-gnu/engines-1.1"
Seeding source: os-specific

```

{% highlight bash %}

openssl s_client -showcerts -connect 192.0.0.0:443`
# Look Peer signature type: RSA-PSS (my case)
# Look Server Temp Key: ECDH, P-256, 256 bits (my case ECDH)
{% endhighlight %}

`Peer signature type` - comes from openssl and you can't change with nginx or apache.

`Server Temp Key` - You can change wiht ningix or apache2

```
openssl s_client -showcerts -connect 192.0.0.0:443
openssl version -a
```