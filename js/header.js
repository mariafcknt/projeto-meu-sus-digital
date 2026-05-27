const path = window.location.pathname.includes('/pages/')
  ? '../components/header.html'
  : './components/header.html'

fetch(path)
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('header-container')
    if (!container) return

    container.innerHTML = html 

    const tipo = container.dataset.tipo
    const titulo = container.dataset.titulo
    const voltar = container.dataset.voltar

    document.getElementById('header-principal').style.display = tipo === 'principal' ? '' : 'none'
    document.getElementById('header-interno').style.display = tipo === 'interno' ? '' : 'none'

    if (tipo === 'principal') {
      document.getElementById('header-titulo').textContent = titulo || 'Tela inicial'
    }

    if (tipo === 'interno') {
      document.getElementById('header-subtitulo').textContent = titulo || ''

      const paginaAnterior = sessionStorage.getItem('pagina-anterior')
      const destino = voltar || paginaAnterior || '../index.html'

      document.getElementById('header-voltar').setAttribute('href', destino)

      if (!voltar) {
        sessionStorage.removeItem('pagina-anterior')
      }
    }
  })