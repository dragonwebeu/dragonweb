var vm = new Vue({
    delimiters:['<%', '%>'],
    el: '.content',

    data: {
    articles: [
        
            {
            "title"    : "DragonWeb with new design almost ready",      
            "url"      : "/news/2017/05/25/dragonweb-update.html",
            "content"  : "I’m happy to tell anyone that new site is ALMOST ready. Will update this soon…"
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



