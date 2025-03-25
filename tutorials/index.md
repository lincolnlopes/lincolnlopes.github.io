---
layout: default
title: Tutoriais
description: Base de conhecimento com tutoriais práticos sobre desenvolvimento, DevOps e tecnologia
---

# Tutoriais

Bem-vindo à seção de tutoriais! Aqui você encontrará guias práticos e detalhados sobre diversas tecnologias e ferramentas.

## Categorias

<div class="tutorial-categories">
  {% assign categories = site.tutorials | map: "categories" | uniq %}
  {% for category in categories %}
    <div class="category-section">
      <h3>{{ category | capitalize }}</h3>
      <ul>
        {% for tutorial in site.tutorials %}
          {% if tutorial.categories contains category %}
            <li>
              <a href="{{ tutorial.url }}">{{ tutorial.title }}</a>
              {% if tutorial.description %}
                <p class="description">{{ tutorial.description }}</p>
              {% endif %}
              {% if tutorial.difficulty %}
                <span class="difficulty {{ tutorial.difficulty }}">{{ tutorial.difficulty }}</span>
              {% endif %}
            </li>
          {% endif %}
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

## Tutoriais Recentes

<div class="recent-tutorials">
  {% assign recent_tutorials = site.tutorials | sort: 'date' | reverse | limit: 5 %}
  {% for tutorial in recent_tutorials %}
    <div class="tutorial-card">
      <h3><a href="{{ tutorial.url }}">{{ tutorial.title }}</a></h3>
      {% if tutorial.description %}
        <p>{{ tutorial.description }}</p>
      {% endif %}
      <div class="metadata">
        <span class="date">{{ tutorial.date | date: "%d/%m/%Y" }}</span>
        {% if tutorial.tags %}
          <div class="tags">
            {% for tag in tutorial.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Tags Populares

<div class="tag-cloud">
  {% assign tags = site.tutorials | map: "tags" | uniq %}
  {% for tag in tags %}
    {% assign tag_count = site.tutorials | where_exp: "tutorial", "tutorial.tags contains tag" | size %}
    <a href="/tags/{{ tag | slugify }}" class="tag-{{ tag_count }}">{{ tag }}</a>
  {% endfor %}
</div> 