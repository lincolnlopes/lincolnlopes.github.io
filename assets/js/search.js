// Configuração do Lunr.js para busca
const searchIndex = lunr(function() {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('content');
  this.field('tags');
  this.field('categories');
});

// Adicionar documentos ao índice
{% for tutorial in site.tutorials %}
  searchIndex.add({
    id: '{{ tutorial.url }}',
    title: '{{ tutorial.title | escape }}',
    content: {{ tutorial.content | strip_html | escape | jsonify }},
    tags: {{ tutorial.tags | jsonify }},
    categories: {{ tutorial.categories | jsonify }},
    type: 'tutorial'
  });
{% endfor %}

{% for article in site.articles %}
  searchIndex.add({
    id: '{{ article.url }}',
    title: '{{ article.title | escape }}',
    content: {{ article.content | strip_html | escape | jsonify }},
    tags: {{ article.tags | jsonify }},
    categories: {{ article.categories | jsonify }},
    type: 'article'
  });
{% endfor %}

// Função de busca
function performSearch(query) {
  const results = searchIndex.search(query);
  const searchResults = document.getElementById('search-results');
  
  if (results.length === 0) {
    searchResults.innerHTML = '<p class="no-results">Nenhum resultado encontrado.</p>';
    return;
  }
  
  const resultsList = document.createElement('ul');
  resultsList.className = 'search-results-list';
  
  results.forEach(result => {
    const item = document.createElement('li');
    item.className = 'search-result-item';
    
    const link = document.createElement('a');
    link.href = result.ref;
    link.className = 'search-result-link';
    
    const title = document.createElement('h3');
    title.className = 'search-result-title';
    title.textContent = result.doc.title;
    
    const excerpt = document.createElement('p');
    excerpt.className = 'search-result-excerpt';
    excerpt.textContent = result.doc.content.substring(0, 150) + '...';
    
    const metadata = document.createElement('div');
    metadata.className = 'search-result-metadata';
    
    if (result.doc.tags) {
      const tags = document.createElement('div');
      tags.className = 'search-result-tags';
      result.doc.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
      });
      metadata.appendChild(tags);
    }
    
    link.appendChild(title);
    link.appendChild(excerpt);
    link.appendChild(metadata);
    item.appendChild(link);
    resultsList.appendChild(item);
  });
  
  searchResults.innerHTML = '';
  searchResults.appendChild(resultsList);
}

// Event listener para o campo de busca
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value;
      if (query.length >= 2) {
        performSearch(query);
      } else {
        document.getElementById('search-results').innerHTML = '';
      }
    });
  }
}); 