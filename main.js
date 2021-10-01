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

/* colocar sombra no header quando fazer scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }else {
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  
  slidesPerView: 1,
  
  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }

})

/* ScrollReveal: Mostrar elementos quando der scroll na página suavemente */
const scrollReveal = ScrollReveal({
  
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,

})

scrollReveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, {interval: 100}
)

/* Botão de voltar ao topo */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
})