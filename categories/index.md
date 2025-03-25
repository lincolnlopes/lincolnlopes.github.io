---
layout: default
title: Categorias
description: Explore o conteúdo organizado por categorias
permalink: /categories/
---

# Categorias

Explore nosso conteúdo organizado por categorias. Cada categoria contém artigos e tutoriais relacionados a um tema específico.

{% assign categories = site.tutorials | map: "categories" | uniq | sort %}
{% for category in categories %}
  {% assign tutorials = site.tutorials | where: "categories", category %}
  {% assign articles = site.articles | where: "categories", category %}
  
  <div class="category-section">
    <h2 id="{{ category | slugify }}">{{ category | capitalize }}</h2>
    
    {% if tutorials.size > 0 %}
      <h3>Tutoriais</h3>
      <div class="content-grid">
        {% for tutorial in tutorials %}
          <div class="content-card">
            <h4><a href="{{ tutorial.url }}">{{ tutorial.title }}</a></h4>
            {% if tutorial.description %}
              <p>{{ tutorial.description }}</p>
            {% endif %}
            <div class="metadata">
              {% if tutorial.difficulty %}
                <span class="difficulty {{ tutorial.difficulty }}">{{ tutorial.difficulty }}</span>
              {% endif %}
              {% if tutorial.time_to_read %}
                <span class="time-to-read">{{ tutorial.time_to_read }} min</span>
              {% endif %}
            </div>
            {% if tutorial.tags %}
              <div class="tags">
                {% for tag in tutorial.tags %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% endif %}
    
    {% if articles.size > 0 %}
      <h3>Artigos</h3>
      <div class="content-grid">
        {% for article in articles %}
          <div class="content-card">
            <h4><a href="{{ article.url }}">{{ article.title }}</a></h4>
            {% if article.description %}
              <p>{{ article.description }}</p>
            {% endif %}
            <div class="metadata">
              {% if article.date %}
                <span class="date">{{ article.date | date: "%d/%m/%Y" }}</span>
              {% endif %}
            </div>
            {% if article.tags %}
              <div class="tags">
                {% for tag in article.tags %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% endif %}
  </div>
{% endfor %} 