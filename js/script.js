document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e=>{
  e.preventDefault();

  document.querySelector('.-menuShown')?.classList.remove('-menuShown');

  let linkid = a.getAttribute("href");
  let indent = parseInt(window.getComputedStyle(document.querySelector(linkid))?.['padding-top']) > 70 ? 0 : 40;
  if(document.querySelector('.section-subheader')){indent += 40}
  if(document.querySelector('.section-blogContent .sect-cont')){indent += 80}

  window.scrollBy({
    top: document.querySelector(linkid)?.getBoundingClientRect().top - indent,
    behavior: 'smooth'
  });
}));

const headerBurger = document.querySelector('.header__burger');
const links = document.querySelectorAll('.links a');
headerBurger.addEventListener('click', function(event) {
  headerBurger.classList.toggle('active');
  document.querySelector('.links').classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', function(event) {
    headerBurger.classList.remove('active');
    document.querySelector('.links').classList.remove('active');
  });
});
