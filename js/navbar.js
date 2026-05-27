const navbarPath = window.location.pathname.includes('/pages/')
  ? '../components/navbar.html'
  : './components/navbar.html'


fetch(navbarPath)
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html

    const isIndex = !window.location.pathname.includes('/pages/')

    if (isIndex) {
      const logo = document.querySelector('.navbar-item-center')

      if (logo) {
        logo.src = './assets/logo-sus-white.svg'
      }
    }

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