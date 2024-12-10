---
layout: detail
title: nginx Prevent NGINX to remove the port
date: 2024-02-02 00:00:00 +0000
categories: linux
---
With this setup, Nginx will keep the port in your redirections, no matter you firewall configuration.
replace **proxy_set_header Host $host;** with **proxy_set_header Host $http_host;**
