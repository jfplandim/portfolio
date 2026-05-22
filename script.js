var sections = document.querySelectorAll('section')
var navLinks  = document.querySelectorAll('nav a')

window.addEventListener('scroll', function () {
  var scrollY = window.scrollY
  var atualId = ''

  sections.forEach(function (section) {
    if (scrollY >= section.offsetTop - 100) {
      atualId = section.id
    }
  })

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === '#' + atualId){
      link.classList.add('ativo')
    } else {
      link.classList.remove('ativo')
    }
    })
})