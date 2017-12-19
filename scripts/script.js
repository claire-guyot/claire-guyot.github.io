
  var bouton = document.querySelector('.bouton');
  var contenu = document.querySelector('.bloc_texte_projets');
  var images = document.querySelector('.images_projets');
  var langFr = document.querySelector('.lang-fr');
  var langEn = document.querySelector('.lang-en');

  if (bouton !== null) {
    bouton.addEventListener('click', function() {
      contenu.classList.toggle('ouvert');
      images.classList.toggle('etroit');
    });
  }

  window.addEventListener('load', function() {
    if (window.location.href.indexOf('#en') !== -1) {
      setEnglish();
    }
  });

  langFr.addEventListener('click', setFrench);
  langEn.addEventListener('click', setEnglish);

  function setFrench() {
    document.body.classList.remove('english');
    removeEnglishUrlFragment();
  }

  function setEnglish() {
    document.body.classList.add('english');
    addEnglishUrlFragment();
  }

  function addEnglishUrlFragment() {
    var a = document.querySelectorAll('a');
    var arr = Array.from(a);
    arr.forEach(a => {
      if (a.getAttribute('href').indexOf('#en') === -1) {
        a.setAttribute('href', a.getAttribute('href') + '#en');
      }
    });
  }

  function removeEnglishUrlFragment() {
    var a = document.querySelectorAll('a');
    var arr = Array.from(a);
    arr.forEach(a => {
      a.setAttribute('href', a.getAttribute('href').replace('#en', ''));
    });
  }

  var couleurs = [
    'aliceblue',
    'lightyellow',
    'honeydew',
    'lavenderblush',
  ];
  var bloc_contenu = document.querySelector('.contenu');

  if (bloc_contenu) {
    bloc_contenu.style.background = couleurs[Math.floor(Math.random() * couleurs.length)];
  }
