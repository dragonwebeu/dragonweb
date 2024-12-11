---
layout: detail
title: Start puma with /etc/init.d/
date: 2023-12-12 00:00:00 +0000
categories: linux
excerpt_separator: <!--more-->
---
Start puma with /etc/init.d/ this is for staging
<!--more-->

```
#!/bin/sh
### BEGIN INIT INFO
# Provides:          puma_web
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start puma_web at boot time
# Description:       Enable service provided by puma_web.
### END INIT INFO

APP_DIR=/home/apps/current
USER=root
PUMA_CONFIG_FILE=/home/apps/current/config/puma.rb
PUMA_PID_FILE=/home/apps/current/tmp/pids/puma.pid
PUMA_SOCKET=/home/apps/current/tmp/sockets/puma.sock
PATH=/usr/local/rvm/gems/ruby-2.3.1/bin:/usr/local/rvm/gems/ruby-2.3.1@global/bin:/usr/local/rvm/rubies/ruby-2.3.1/bin:/usr/local/rvm/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

. /lib/init/vars.sh
. /lib/lsb/init-functions


case "$1" in
  start)
    echo "Starting Puma..."
    cd $APP_DIR
    if [ -e $PUMA_SOCKET ] ; then
      rm -f $PUMA_SOCKET
    fi
    if [ -e $PUMA_CONFIG_FILE ] ; then
      RAILS_ENV=staging bundle exec puma -C $PUMA_CONFIG_FILE
    else
      su - $USER -c "bundle exec puma"
    fi
    echo "done"
    ;;

  stop)
    echo "Stopping Puma..."
    kill -QUIT `cat $PUMA_PID_FILE`
    echo "done"
    ;;

  restart)
    echo "Restarting Puma..."
    $0 stop
    $0 start
    ;;

  status)
    if [ -e $PUMA_PID_FILE ]; then
      PID=`cat $PUMA_PID_FILE`
      if ps -p $PID > /dev/null
      then
        echo "Puma is running (PID $PID)"
      else
        echo "Puma is not running (but pid file exists)"
      fi
    else
      echo "Puma is not running"
    fi
    ;;

  *)
    echo "Usage: script {start|stop|restart}" >&2
    exit 3
    ;;
esac
```

