fetch('./components/header.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('header-container')
    container.innerHTML = html

    const tipo = container.dataset.tipo
    const titulo = container.dataset.titulo
    const voltar = container.dataset.voltar

    // mostra apenas o header correto
    document.getElementById('header-principal').style.display = tipo === 'principal' ? '' : 'none'
    document.getElementById('header-interno').style.display = tipo === 'interno' ? '' : 'none'

    // aplica título e link de voltar dinamicamente
    if (tipo === 'principal') {
      document.getElementById('header-titulo').textContent = titulo || 'Tela inicial'
    }

    if (tipo === 'interno') {
      document.getElementById('header-subtitulo').textContent = titulo || ''
      document.getElementById('header-voltar').setAttribute('href', voltar || './index.html')
    }
    
  })