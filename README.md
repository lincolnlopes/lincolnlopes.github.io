# Lincoln Lopes - Blog Pessoal

Este é o repositório do meu blog pessoal, construído com Jekyll e hospedado no GitHub Pages.

## 🚀 Tecnologias Utilizadas

- Jekyll 4.3.2
- SASS/SCSS
- JavaScript (Vanilla)
- Font Awesome
- Inter Font
- Utterances (sistema de comentários)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/lincolnlopes/lincolnlopes.github.io.git
cd lincolnlopes.github.io
```

2. Instale as dependências do Ruby:
```bash
bundle install
```

3. Inicie o servidor local:
```bash
bundle exec jekyll serve
```

4. Acesse o site em `http://localhost:4000`

## 📝 Estrutura do Projeto

```
.
├── _articles/          # Artigos do blog
├── _tutorials/         # Tutoriais
├── _projects/          # Projetos
├── _includes/          # Componentes reutilizáveis
├── _layouts/           # Templates
├── _sass/             # Estilos SASS
├── assets/            # Recursos estáticos
│   ├── css/          # CSS compilado
│   ├── js/           # JavaScript
│   └── images/       # Imagens
└── _config.yml       # Configurações do Jekyll
```

## 🎨 Personalização

### Tema
O site utiliza um tema personalizado com suporte a modo claro/escuro. As cores e estilos podem ser modificados em `_sass/variables.scss`.

### Configurações
As principais configurações do site podem ser alteradas no arquivo `_config.yml`:
- Título e descrição
- SEO
- Google Analytics
- Configurações de coleções
- Sistema de comentários

## 📱 Responsividade
O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Mobile: < 768px
- Tablet: < 1024px
- Desktop: < 1200px

## 🔍 Busca
O site possui uma funcionalidade de busca integrada que permite encontrar conteúdo em:
- Tutoriais
- Artigos
- Projetos

## 💬 Comentários
Os comentários são gerenciados através do Utterances, que utiliza GitHub Issues como backend.

## 📦 Deploy
O site é automaticamente construído e publicado no GitHub Pages quando alterações são enviadas para a branch `main`.

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.