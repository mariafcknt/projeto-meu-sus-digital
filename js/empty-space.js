const path = window.location.pathname.includes('/pages/')
  ? '../components/empty-state.html'
  : './components/empty-state.html'

fetch(path)
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('empty-state-container')
    container.innerHTML = html
})

