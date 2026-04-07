fetch('./components/empty-state.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('empty-state-container')
    container.innerHTML = html
})