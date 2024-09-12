// Обработчик для ссылок
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', handleAnchorClick));

// Обработчик для кнопок с onclick, ссылающихся на якорь
document.querySelectorAll('button[onclick^="window.location.href=\'#"]').forEach(btn => btn.addEventListener('click', handleAnchorClick));

function handleAnchorClick(e) {
  e.preventDefault();

  document.querySelector('.-menuShown')?.classList.remove('-menuShown');

  let linkid = e.currentTarget.getAttribute("href") || e.currentTarget.getAttribute("onclick").replace("window.location.href='", "").replace("'", "");
  let indent = parseInt(window.getComputedStyle(document.querySelector(linkid))?.['padding-top']) > 70 ? 0 : 40;
  if(document.querySelector('.section-subheader')){indent += 40}
  if(document.querySelector('.section-blogContent .sect-cont')){indent += 80}

  window.scrollBy({
    top: document.querySelector(linkid)?.getBoundingClientRect().top - indent,
    behavior: 'smooth'
  });
}