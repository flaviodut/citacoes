(function() {

  // Quando o usuário digitar o padrão informado, torna-se visível o elemento
  var zezimMeme = (function() {

    // Referência o elemento #zezim
    var _nodeZezim = document.querySelector('#zezim');

    // Referência o elemento #nyanCat
    var _nodeNyanCat = document.querySelector('#nyanCat');

    // Variável que guarda o padrão à ser verificado
    var _wordPattern = [90,69,90,73,77];

    // Variável que será guardada as teclas digitadas pelo cliente
    var _wordMirror = [];

    // Exibe o conteúdo
    var showContent = function() {
      _nodeNyanCat.play();
      _nodeZezim.style.display = 'flex';
      _nodeNyanCat.addEventListener('ended', resetContent, false);
    };

    // Esconde e reseta o conteúdo
    var resetContent = function() {
      _nodeNyanCat.pause();
      _nodeNyanCat.currentTime = 0;
      _nodeZezim.style.display = 'none';
      _wordMirror = []; // reset
    };

    // Verifica as teclas pressionadas e retorna uma função caso combine com o pattern
    var _handlerKeydown = function(key) {
      var keycode = key;
      var keypos = _wordPattern.indexOf(keycode);

      if (keypos >= 0) { // keycode existe em word
        if (keycode === _wordPattern[_wordMirror.length]) {
          _wordMirror.push(keycode);
          if (_wordMirror.length === _wordPattern.length) {
            showContent();
          }
        }
      } else {
        _wordMirror = []; // reset
      }
    };

    // Handler de teclas do teclado pressionadas
    document.addEventListener('keydown', function(ev) {
      _handlerKeydown(ev.keyCode);
    }, false);

    // Handler para fechar o meme
    _nodeZezim.addEventListener('click', resetContent, false);

    return {
      showContent: showContent,
      resetContent: resetContent
    };

  })();

}());
