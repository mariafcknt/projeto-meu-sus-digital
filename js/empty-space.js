const emptyPath = window.location.pathname.includes('/pages/')
  ? '../components/empty-state.html'
  : './components/empty-state.html'

fetch(emptyPath)
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('empty-state-container')
    container.innerHTML = html
})

