---
layout: tutorial
title: Criando um Blog Profissional com Jekyll
description: Um guia passo a passo para criar um blog profissional usando Jekyll, incluindo configuração, personalização e deploy.
date: 2024-03-20
author: Lincoln Lopes
tags: [jekyll, ruby, github-pages, web]
categories: [Desenvolvimento Web]
difficulty: intermediario
duration: 30 minutos
prerequisites:
  - Conhecimento básico de HTML e CSS
  - Git instalado
  - Conta no GitHub
---

# Criando um Blog Profissional com Jekyll

Neste tutorial, você aprenderá a criar um blog profissional usando Jekyll, um gerador de sites estáticos escrito em Ruby. Vamos cobrir desde a configuração inicial até o deploy no GitHub Pages.

## O que você vai aprender

- Configurar o ambiente de desenvolvimento
- Criar a estrutura do blog
- Personalizar o tema
- Adicionar funcionalidades como comentários e busca
- Fazer deploy no GitHub Pages

## Pré-requisitos

Antes de começar, certifique-se de ter:
- Ruby instalado (versão 2.5 ou superior)
- Git instalado
- Uma conta no GitHub
- Um editor de código (VS Code recomendado)

## Passo 1: Instalando o Ruby e Jekyll

Primeiro, vamos instalar o Ruby e o Jekyll. No macOS, você pode usar o Homebrew:

```bash
brew install ruby
gem install bundler jekyll
```

## Passo 2: Criando um novo site Jekyll

Agora vamos criar um novo site Jekyll:

```bash
jekyll new meu-blog
cd meu-blog
```

## Passo 3: Configurando o _config.yml

Edite o arquivo `_config.yml` com suas configurações:

```yaml
title: Meu Blog
description: Um blog sobre tecnologia e desenvolvimento
baseurl: ""
url: "https://seu-usuario.github.io"

# Autor
author:
  name: Seu Nome
  bio: Desenvolvedor Full Stack
  location: Brasil
  avatar: /assets/images/avatar.jpg

# Configurações do Jekyll
markdown: kramdown
permalink: /:year/:month/:day/:title/
paginate: 5
paginate_path: /blog/page:num/

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
```

## Passo 4: Criando layouts personalizados

Crie um layout personalizado para posts em `_layouts/post.html`:

```html
---
layout: default
---
<article class="post">
  <header class="post-header">
    <h1>{{ page.title }}</h1>
    <div class="post-meta">
      <span class="date">{{ page.date | date: "%d/%m/%Y" }}</span>
      <span class="author">{{ page.author }}</span>
    </div>
  </header>

  <div class="post-content">
    {{ content }}
  </div>

  <footer class="post-footer">
    <div class="post-tags">
      {% for tag in page.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </footer>
</article>
```

## Passo 5: Adicionando um sistema de comentários

Vamos usar o Utterances para adicionar comentários. Adicione este código ao seu layout de post:

```html
<script src="https://utteranc.es/client.js"
        repo="seu-usuario/seu-repositorio"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

## Passo 6: Adicionando busca

Instale o Jekyll Search e adicione ao seu `_config.yml`:

```yaml
plugins:
  - jekyll-search
```

## Passo 7: Deploy no GitHub Pages

1. Crie um novo repositório no GitHub
2. Configure o GitHub Actions para deploy automático:

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
          path: '_site'

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

## Conclusão

Agora você tem um blog profissional com:
- Design moderno e responsivo
- Sistema de comentários
- Busca integrada
- Deploy automático
- SEO otimizado

## Próximos passos

- Personalize o tema com suas cores e estilos
- Adicione mais funcionalidades como newsletter
- Crie conteúdo regularmente
- Monitore as métricas do seu blog

## Recursos adicionais

- [Documentação do Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Utterances](https://utteranc.es/) 