fetch('./components/navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html

    // marca o item ativo após carregar
    const navItems = document.querySelectorAll('.navbar-item')
    let currentPath = window.location.pathname

    if (currentPath.endsWith('/') || currentPath === '') {
      currentPath = '/index.html'
    }

    navItems.forEach(item => {
      const itemHref = item.getAttribute('href')
      const itemPath = itemHref.replace('./', '/')

      if (currentPath.endsWith(itemPath)) {
        item.classList.add('active')
        item.setAttribute('aria-current', 'page')
      } else {
        item.classList.remove('active')
        item.removeAttribute('aria-current')
      }
    })
  })