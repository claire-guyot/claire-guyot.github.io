
  var couleurs = [
    'rgb(11, 0, 68)',
    'rgb(255, 126, 126)',
    'rgb(36, 0, 69)',
    'rgb(61, 0, 46)',
    /*'aliceblue',
    'lightyellow',
    'honeydew',
    'lavenderblush',*/
  ];
var bloc_mentions= document.querySelector('.mentionslegales');

  if (bloc_mentions) {
    bloc_mentions.style.background = couleurs[Math.floor(Math.random() * couleurs.length)];
  }
