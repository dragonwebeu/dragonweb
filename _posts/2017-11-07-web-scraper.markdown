---
layout: detail
title:  How to create simple web scraper in node.js
# date:   2017-05-30 14:55:12 +0300
date:   2017-11-07 14:55:12 +0300
categories: tutorials
excerpt_separator: <!--more-->
---

I have been using Node.js to scrape articles/posts from forums or Wikipedia and saved them into .txt file. Then I convert text to .mp3 with text to speech application like [balabonka](http://www.cross-plus-a.com/balabolka.htm), which is free and best one out there. For better voices than Microsoft, I use [Ivona Amy speech synthesizer](https://www.ivona.com/).
<!--more-->
You can create an app. that downloads pictures from [https://unsplash.com/](https://unsplash.com/) automatically all in one place etc.

### Install latest node.js from here
[https://nodejs.org/en/](https://nodejs.org/en/)

### Open node.js command prompt.
{% highlight javascript %}
cd Documents
mkdir demo-scraper
npm install cheerio request --save 
npm init //just keep pressing enter if you don't want write anything
rem. > app.js
{% endhighlight %}
**Cheerio** is fast, flexible & lean implementation of core jQuery designed specifically for the server. <br />
**Request** is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
**npm init** - just keep pressing enter if you don't want write anything. <br />
**rem. > app.js** - how to create empty file in cmd. app.js is where you write your code.

### Scrape Wikipedia article into text file
{% highlight javascript %}
var request = require('request'),
cheerio = require('cheerio'),
fs = require('fs');

//Clear node.js command prompt console
process.stdout.write('\033c');

var request = require('request');
request('https://en.wikipedia.org/wiki/Cubit', function (error, response, body) {
    if(error) throw error;

    var $ = cheerio.load(body);

    if(!error && response.statusCode == 200) {        
        //removes
        $('.thumb.tright, #toc, .mw-editsection, .reference, .thumb.tnone, .hatnote.navigation-not-searchable,'+
        ' #References, .reflist, table, .mw-parser-output ul:last-of-type, External_links').remove();
                
        var title = $('body').find('h1#firstHeading').text().trim();
        var article = $('body').find('#bodyContent .mw-parser-output').text().trim();        
        
        //console.log(article);
        fs.appendFileSync(title+'.txt', article + '\r\n');
    }
});
{% endhighlight %}

**fs** is build in "File System" module.

Write "**node app.js**" to command prompt to execute code.

### Multiple request for srcraping
Something similar below I used for the forum, but had multiple checks(username, if the content contains something etc.) and used async. 
{% highlight javascript %}
var request = require('request'),
cheerio = require('cheerio'),
fs = require('fs');


//Clear node.js command prompt console
process.stdout.write('\033c');

var urls = [];

request('<some url to links>', function(error, response, body){
    if(error) throw error;

    var $ = cheerio.load(body);

    if(!error && response.statusCode == 200) {
        $('body a').each(function(index){
            url = $(this).attr('href');
            urls.push(url);        
        });       
    }

    urls.forEach(function (url){
        request(url, function (error, response, body){
            if(error) throw error;

            var $ = cheerio.load(body);

            var title = $('#content').find('.title').text().trim();           

            if(!error && response.statusCode == 200) {      
                $('table tr').each(function(index) {                    
                    var username = $(this).find('td:first-child font b').text().trim();                
                    var message = $(this).find('td:last-child').text();
                    
                    fs.appendFileSync("forum_posts/"+ title + '.txt','\r\n' + username + '\n' + message + '\r\n');
                });
            }
        })
    });  
});
{% endhighlight %}
