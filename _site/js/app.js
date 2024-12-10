var vm = new Vue({
    delimiters:['<%', '%>'],
    el: '.content',

    data: {
    articles: [
        
            {
            "title"    : "Linux disable ping to machine",      
            "url"      : "/linux/2024/05/02/Linux-disable-ping-to-machine.html",
            "content"  : "Linux disable ping to machine"
            } ,
        
            {
            "title"    : "Mail server pointer",      
            "url"      : "/linux/2024/05/02/Mail-server-pointer.html",
            "content"  : "Mail server pointerSome older mail servers need resolve both ways"
            } ,
        
            {
            "title"    : "Linux jq command",      
            "url"      : "/linux/2024/05/02/Linux-jq-command.html",
            "content"  : "Linux jq command"
            } ,
        
            {
            "title"    : "OpenSSL debug tips after server change troubleshooting certs.",      
            "url"      : "/linux/2024/04/29/OpenSSL-debug-tips-after-server-change-troubleshooting-certs.html",
            "content"  : "OpenSSL debug tips after server change troubleshooting certs."
            } ,
        
            {
            "title"    : "Iptabel block IP",      
            "url"      : "/linux/2024/04/10/Iptabel-block-IP.html",
            "content"  : "Iptable block IP"
            } ,
        
            {
            "title"    : "Linux get lines from file",      
            "url"      : "/linux/2024/04/08/Linux-get-lines-from-file.html",
            "content"  : "How to get lines count from file in Linux."
            } ,
        
            {
            "title"    : "Linux install dig",      
            "url"      : "/linux/2024/02/28/Linux-install-dig.html",
            "content"  : "Linux install DIG"
            } ,
        
            {
            "title"    : "postgres pgcrypto",      
            "url"      : "/postgres/2024/02/22/postgres-pgcrypto.html",
            "content"  : "postgres pgcrypto"
            } ,
        
            {
            "title"    : "git submodule",      
            "url"      : "/web-development/2024/02/07/git-submodule.html",
            "content"  : "git config submodule.recurse true"
            } ,
        
            {
            "title"    : "GNU parallel",      
            "url"      : "/linux/2024/02/07/GNU-parallel.html",
            "content"  : "GNU parallel"
            } ,
        
            {
            "title"    : "Linux show if hard drive is HDD or SSD",      
            "url"      : "/linux/2024/02/04/Linux-show-if-hard-drive-is-HDD-or-SSD.html",
            "content"  : "Linux show if hard drive is HDD or SSD"
            } ,
        
            {
            "title"    : "nginx Prevent NGINX to remove the port",      
            "url"      : "/linux/2024/02/02/nginx-Prevent-NGINX-to-remove-the-port.html",
            "content"  : "With this setup, Nginx will keep the port in your redirections, no matter you firewall configuration.replace proxy_set_header Host $host; with proxy_set_header Host $http_host;"
            } ,
        
            {
            "title"    : "Run postgres database in Docker",      
            "url"      : "/docker/2024/02/02/Run-postgres-database-in-Docker.html",
            "content"  : "Here is command how to create docker postgres container with custom port"
            } ,
        
            {
            "title"    : "Linux command to inspect TXT records of a domain",      
            "url"      : "/linux/2024/02/02/Linux-command-to-inspect-TXT-records-of-a-domain.html",
            "content"  : "Linux host command for see quickly domain dns records."
            } ,
        
            {
            "title"    : "Install deb package command line",      
            "url"      : "/linux/2024/01/30/Install-deb-package-command-line.html",
            "content"  : "So I have problem in my Debian that I can’t install Discord and other .deb updates trough Softwear center.Here is solution, installing/updating it trough command line"
            } ,
        
            {
            "title"    : "Docker and docker-compose update",      
            "url"      : "/linux/2024/01/29/Docker-and-docker-compose-update.html",
            "content"  : "Docker and docker-compose update"
            } ,
        
            {
            "title"    : "debian strech source fix 2023",      
            "url"      : "/linux/2024/01/25/debian-strech-source-fix-2023.html",
            "content"  : "debian strech source fix 2023"
            } ,
        
            {
            "title"    : "Linux stress testing site",      
            "url"      : "/linux/2024/01/25/Linux-stress-testing-site.html",
            "content"  : "Linux stress testing site"
            } ,
        
            {
            "title"    : "autovacuum and vacuum check in postgres",      
            "url"      : "/postgres/2024/01/14/autovacuum-and-vacuum-check-in-postgres.html",
            "content"  : "autovacuum and vacuum check in postgres"
            } ,
        
            {
            "title"    : "Run postgres database in Docker",      
            "url"      : "/rails/2024/01/06/Rails-ActiveRecord-Batches-aka-find-in-batches.html",
            "content"  : "Rails ActiveRecord::Batches aka find in batches"
            } ,
        
            {
            "title"    : "How to add a time taken to picture in Linux",      
            "url"      : "/linux/2023/11/03/How-to-add-a-time-taken-to-picture-in-Linux.html",
            "content"  : "Here is simple way how add time take or file modifed to picture"
            } ,
        
            {
            "title"    : "Super fast way to import CSV file into the PostgreSQL database",      
            "url"      : "/web-development/2018/07/21/Super-fast-way-to-import-CSV-file-into-the-PostgreSQL-database.html",
            "content"  : "I usually used  CSV gem to import each row to the database but it long and a really stupid way to do it. After some research, I found that PostgreSQL has /copy command which is super fast and easy to use."
            } ,
        
            {
            "title"    : "How to solve column must appear in the GROUP BY clause or be used in an aggregate function",      
            "url"      : "/web-development/2018/07/21/GROUP-BY-clause-or-be-used-in-an-aggregate-function.html",
            "content"  : "Two months back I had a problem at work with one PostgreSQL queries. Whenever I was using was using GROUP BY I got “column must appear in the GROUP BY clause or be used in an aggregate function”"
            } ,
        
            {
            "title"    : "Rails custom validation",      
            "url"      : "/web-development/2018/07/21/rails-custom-validation.html",
            "content"  : "This is how make own custom rails validation with traslation"
            } ,
        
            {
            "title"    : "How to create simple web scraper in node.js",      
            "url"      : "/tutorials/2017/11/07/web-scraper.html",
            "content"  : "I have been using Node.js to scrape articles/posts from forums or Wikipedia and saved them into .txt file. Then I convert text to .mp3 with text to speech application like balabonka, which is free and best one out there. For better voices than Microsoft, I use Ivona Amy speech synthesizer."
            } ,
        
            {
            "title"    : "DragonWeb new site with no CMS. What madness is this?",      
            "url"      : "/news/2017/05/30/dragonweb-update.html",
            "content"  : "Many of you who read this and visit my site are from CMS Made Simple website thanks to the template I made a long time ago.I strongly believe many of you and others do not need any Content management system (CMS), small company websites, blogs should use Jekyll or something similar for cheaper costs and for security. Content management system like Wordpress etc. are hackers paradise! Customer or user usually does not know how to update a website or lack money and skill to so after setting up CMS."
            } 
                
    ],        
    searchText: ''
    },

    computed : {
        itemsSearched : function(){
                var articles_array = this.articles,
                    searchText = this.searchText;

                if(!searchText){
                    return articles_array;
                }

                searchText = searchText.trim().toLowerCase();

                articles_array = articles_array.filter(function(item){
                    if(item.title.toLowerCase().indexOf(searchText) !== -1){
                        return item;
                    }
                    else if(item.content.toLowerCase().indexOf(searchText) !== -1){
                        return item;
                    }                    
                })
                
                return articles_array;
        }
    }
});



