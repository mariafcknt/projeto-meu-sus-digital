fetch('./components/links-saude.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('links-saude-container')
    const limite = container.dataset.limite

    const temp = document.createElement('div')
    temp.innerHTML = html

    if (limite) {
      const cards = temp.querySelectorAll('.links-content-wrapper')
      cards.forEach((card, index) => {
        if (index >= parseInt(limite)) card.remove()
      })
    }

    container.innerHTML = temp.innerHTML
})