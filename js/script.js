(function(){
  'use strict';

  console.log(quotes);
  
  var pattern = [68,65,78,71,69,82]; // danger
  var mirror = [];
  
  // Verifica as teclas pressionadas e retorna uma função caso combine com o pattern
  document.addEventListener('keydown', function(ev) {
    var keycode = ev.keyCode;
    var keypos = pattern.indexOf(keycode);
    
    if (keypos >= 0) { // keycode existe em word
      if (keypos === mirror.length) {
        mirror.push(keycode);
        if (mirror.length === 6) {
          console.log('now i call a function');
        }
      }
    } else {
      mirror = []; // reset
    }
  });

}());