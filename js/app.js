---
---
var vm = new Vue({
    delimiters:['<%', '%>'],
    el: '.content',

    data: {
    articles: [
        {% for post in site.posts %}
            {
            "title"    : "{{ post.title | escape }}",      
            "url"      : "{{ site.baseurl }}{{ post.url }}",
            "content"  : "{{ post.excerpt | strip_html | strip_newlines | remove_chars | escape }}"
            } {% unless forloop.last %},{% endunless %}
        {% endfor %}        
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



