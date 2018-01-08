
  var couleurs = [
    'aliceblue',
    'lightyellow',
    'honeydew',
    'lavenderblush',
  ];
var bloc_mentions= document.querySelector('.mentionslegales');

  if (bloc_mentions) {
    bloc_mentions.style.background = couleurs[Math.floor(Math.random() * couleurs.length)];
  }


  
