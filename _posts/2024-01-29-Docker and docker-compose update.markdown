---
layout: detail
title: Docker and docker-compose update
date: 2024-01-29 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Docker and docker-compose update
<!--more-->


## Upgrade Docker
If you using Debian stretch
```bash
sudo nano /etc/apt/sources.list
# Add Docker to source.list
deb [arch=amd64] https://download.docker.com/linux/debian buster stable
sudo apt update && sudo apt upgrade
```

## Upgrading docker-compose all users
Removing the old version
```
cd /usr/local/bin && sudo rm -rf docker-compose
```

Install docker-compose

Get lates version from https://docs.docker.com/compose/install/linux/#install-the-plugin-manually
```
sudo mkdir -p /usr/local/lib/docker/cli-plugin
sudo curl -SL https://github.com/docker/compose/releases/download/v2.24.2/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugin/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugin/docker-compose
```

Verify if it's installed correctly

```
docker compose version
```

PS! If your old system was **docker-compose X** (up, down, stop, --version) then remember 2.x is **docker compose X**