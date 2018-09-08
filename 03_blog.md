---
layout: blog
title: Blog
permalink: /blog/
menu: main
order: 3
header-title: Web development & Security - Other projects
header-description: See on blog, kus leiad kõikke vajaliku
---
<div v-if="!itemsSearched.length" class="large-12 columns">
    <h2>No result!</h2>
</div>
<div v-if="articles" class="large-12 columns">  
    <article v-for="post in itemsSearched" class="article-summary">
      <header>
        <h2><a v-bind:href="post.url"><% post.title %></a></h2>
      </header>      
      <p><% post.content %></p>      
      <div class="large-12 column"> 
      {% if post.content > 170 %}
        <a class="read-more" v-bind:href="post.url">Read More...</a>
      {% endif %}
        <div class="middle_line"></div>
      </div>
    </article>      
</div>

