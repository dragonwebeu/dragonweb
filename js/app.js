var vm = new Vue({
    delimiters:['<%', '%>'],
    el: '.content',

    data: {
    articles: [
        
            {
            "title"    : "DragonWeb new site with no CMS. What madness is this?",      
            "url"      : "/news/2017/09/30/dragonweb-update.html",
            "content"  : "New site with no CMS, what madness is this?!Simple answer is Jekyll"
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



