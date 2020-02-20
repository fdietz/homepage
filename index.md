---
layout: page
title: Home
templateEngineOverride: njk,md
---
# Nice to meet you

Hi, my name is Frederik Dietz and I'm a passionate software developer located in beautiful Hamburg, Germany.

I am a company founder ([nearbyminds](https://www.nearbyminds.com)/[nrbyXmedia](http://nrbyxmedia.com/)) and freelancer with a focus on React, Vue.js and Ruby on Rails. Get in <a href="mailto:fdietz@gmail.com">contact</a> or learn more [about me](/pages/about) first!

## Posts

{% set postslist = collections.posts | head(-5) %}
{% include "postslist.njk" %}

More posts can be found in <a href="{{ '/archive/' | url }}">the archive</a>.

## Tags

{% include "tagslist.njk" %}

## Books

<ul class="list-unstyled">
  <li class="media">
    <img src="/images/vue_book.png" width="120" alt="vue.js components course">
    <div class="media-body">
      <h4>Vue.js Component Patterns Course</h4>
      The goal of this course is to teach you the fundamentals to make Vue.js components that are simpler, more flexible
          and most of all fun to build and use!
      <a href="/pages/vue-component-patterns-course" class="stretched-link">More Info</a>
    </div>
  </li>
  <li class="media">
    <img src="/images/book-medium.png" width="120" alt="recipes with angular.js book">
    <div class="media-body">
      <h4>Recipes with Angular.js</h4>
      Practical concepts and techniques for rapid web application development
      <a href="/pages/angular-recipes-book" class="stretched-link">
        More Info
      </a>
    </div>
  </li>
</ul>
