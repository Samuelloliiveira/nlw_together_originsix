//abre o menu quando clica no incone do mesmo
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('.title')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}