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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  
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
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}


/* Menu ativo conforme a seção visível na página */

//pegando todas as sections que tem um id
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {

  //pegando o deslocamento Y da página e fazendo um calculo
  const limit = window.pageYOffset + (window.innerHeight / 8) * 4

  for(const section of sections) {
    const sectionTop = section.offsetTop //pega topo
    const sectionHeight = section.offsetHeight //pega a altura
    const sectionId = section.getAttribute('id') //pega o id da sessão

    const limitStart = limit >= sectionTop
    const limitEnd = limit <= sectionTop + sectionHeight

    if (limitStart && limitEnd) {
      //pega o id do menu que tem a ver com a sessão do momento
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }

  }


}

/* When Scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})