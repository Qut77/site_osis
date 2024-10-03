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

