var sections = document.querySelectorAll('section');
var navLinks  = document.querySelectorAll('nav a');

window.addEventListener('scroll', function () {
  var scrollY = window.scrollY;
  var atualId = '';

  sections.forEach(function (section) {
    if (scrollY >= section.offsetTop - 80) {
      atualId = section.id;
    }
  });

  navLinks.forEach(function (link) {
    link.style.color = link.getAttribute('href') === '#' + atualId ? '#7ee8a2' : '';
  });
});