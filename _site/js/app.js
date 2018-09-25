var vm = new Vue({
    delimiters:['<%', '%>'],
    el: '.content',

    data: {
    articles: [
        
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


