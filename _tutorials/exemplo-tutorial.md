---
layout: tutorial
title: Como Criar um Blog com Jekyll
description: Um guia passo a passo para criar um blog profissional usando Jekyll, incluindo configuração, personalização e implantação.
date: 2024-03-20
author: Lincoln Lopes
tags: [jekyll, blog, desenvolvimento, web]
categories: [desenvolvimento, web]
difficulty: Intermediário
prerequisites: Conhecimentos básicos de HTML, CSS e Git
---

# Introdução

Jekyll é um gerador de sites estáticos escrito em Ruby que permite criar blogs e sites pessoais de forma simples e eficiente. Neste tutorial, vamos aprender como criar um blog profissional usando Jekyll.

## O que você vai aprender

- Configurar um ambiente de desenvolvimento Jekyll
- Criar a estrutura básica do blog
- Personalizar o tema e layout
- Adicionar funcionalidades como comentários e busca
- Implantar o blog no GitHub Pages

# Configuração Inicial

## Instalando o Ruby e o Jekyll

Primeiro, você precisa ter o Ruby instalado no seu sistema. No macOS, você pode usar o Homebrew:

```bash
brew install ruby
```

Depois, instale o Jekyll e o Bundler:

```bash
gem install jekyll bundler
```

## Criando um novo site Jekyll

Para criar um novo site Jekyll, execute:

```bash
jekyll new meu-blog
cd meu-blog
```

Isso criará uma estrutura básica de diretórios:

```
meu-blog/
├── _config.yml
├── _posts/
├── _layouts/
├── _includes/
├── _sass/
├── assets/
└── index.html
```

# Personalizando o Site

## Configurando o _config.yml

O arquivo `_config.yml` é o principal arquivo de configuração do seu site. Aqui está um exemplo básico:

```yaml
title: Meu Blog
description: Um blog sobre tecnologia e desenvolvimento
baseurl: ""
url: "https://meu-blog.com"

# Configurações de build
markdown: kramdown
plugins:
  - jekyll-feed
  - jekyll-seo-tag

# Informações do autor
author:
  name: Seu Nome
  email: seu@email.com
  bio: Desenvolvedor Full Stack
  location: São Paulo, Brasil
  links:
    - label: GitHub
      icon: fab fa-github
      url: https://github.com/seu-usuario
```

## Criando Layouts Personalizados

Os layouts são templates que definem a estrutura das suas páginas. Vamos criar um layout básico para posts:

```html
---
layout: default
---
<article class="post">
  <header class="post-header">
    <h1>{{ page.title }}</h1>
    <div class="post-meta">
      <time datetime="{{ page.date | date_to_xmlschema }}">
        {{ page.date | date: "%d/%m/%Y" }}
      </time>
      <span class="author">{{ page.author }}</span>
    </div>
  </header>

  <div class="post-content">
    {{ content }}
  </div>
</article>
```

# Adicionando Funcionalidades

## Sistema de Comentários

Para adicionar comentários, você pode usar o Utterances, que utiliza GitHub Issues:

```html
<script src="https://utteranc.es/client.js"
        repo="seu-usuario/seu-repositorio"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

## Busca

Para adicionar busca, você pode usar o Jekyll Search:

```javascript
const searchIndex = [
  {% for post in site.posts %}
    {
      "title": {{ post.title | jsonify }},
      "url": {{ post.url | jsonify }},
      "content": {{ post.content | strip_html | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
```

# Implantação

## Usando GitHub Pages

1. Crie um novo repositório no GitHub
2. Adicione o arquivo `.github/workflows/jekyll.yml`:

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Build site
        run: bundle exec jekyll build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./_site

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

# Conclusão

Neste tutorial, aprendemos como criar um blog profissional usando Jekyll. Agora você tem uma base sólida para começar a criar seu próprio blog.

## Próximos Passos

1. Personalize o tema e adicione mais funcionalidades
2. Crie conteúdo regularmente
3. Otimize o SEO do seu blog
4. Monitore o desempenho e faça ajustes conforme necessário

## Recursos Adicionais

- [Documentação oficial do Jekyll](https://jekyllrb.com/docs/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [GitHub Pages](https://pages.github.com/) 