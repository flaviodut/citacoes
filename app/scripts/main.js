(function(){
  'use strict';

  var quotes = [
      {
          'phrase': 'O portal implodiu, está todo cagado.',
          'date': 'meados de 11/2016',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Quando viramos para o Maestro PHP, os dados/perguntas não estavam combinados e os valores apresentados no portal estavam todos... cagados.'
      },
      {
          'phrase': 'Tem que saber exatamente o que aconteceu. Isso é muito grave.',
          'date': '18/01/2016 às 15h55',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Quando soube que foram enviados seis vezes o mesmo e-mail para cada paciente.'
      },
      {
          'phrase': 'É uma pergunta simples, sim ou não (risos).',
          'date': '19/01/2016 às 11h30',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Quando pediu para o Henrique perguntar pro Leandro, que \'estava\' no hospital, se ele salvou o trabalho no repositório.'
      },
      {
          'phrase': 'O básico que a gente se propõe a fazer pro cliente, a gente não consegue.',
          'date': '20/01/2016 às 18h31',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Ao ser informado que o N continua dando divergência.'
      },
      {
          'phrase': 'Me deixa apavorado, a gente aperta um botão e não sabe o que vai acontecer.',
          'date': '21/01/2016 às 17h15',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Ao receber \'não sei\' como resposta pra uma pergunta a respeito da divergência de Ns.'
      },
      {
          'phrase': 'Bem picareta, coisa de bandido. O cara recebe o salário e vai embora.',
          'date': '16/02/2016 às 11h16',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Ao relembrar do Leandro.'
      },
      {
          'phrase': 'Isso é o que me preocupa mais, vocês me dão certeza, mas o cara abriu na minha frente e o N não bateu.',
          'date': '25/02/2016 às 16h06',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'No meio de uma discussão à respeito de um problema novo encontrado no SEG 2 de DASA.'
      },
      {
          'phrase': 'Estamos corrigindo essa mega explosão atômica!',
          'date': '29/02/2016 às 20h07',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Sobre um problema que deu com relação à algumas marcas de DASA.'
      },
      {
          'phrase': 'Desculpa, não confio mais no trabalho de vocês!',
          'date': '03/03/2016 às 21h15',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Quando notou-se que o alerta diário pra Delboni não trazia informações do Club DA.'
      },
      {
          'phrase': 'Estou tendo um surto psicótico...',
          'date': '08/04/2016 às 15h15',
          'whosaid': 'Paula Baroni',
          'avatar': '4',
          'context': 'Quando ela fez o dump do portal ainda em processamento e os dados não batiam.'
      },
      {
          'phrase': 'A gente precisa entender porque essa diferença. Isso é preocupante.',
          'date': '02/05/2016 às 20h19',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Tranquilamente falando sobre uma diferença de N.'
      },
      {
          'phrase': 'Se continuar desse jeito eu vou sair no máximo as sete e meia.',
          'date': '13/06/2016 às 18h52',
          'whosaid': 'Zezinho',
          'avatar': '3',
          'context': 'Esperançoso.'
      },
      {
          'phrase': 'Eu não sabia disso, eu preciso saber disso quando o negócio é sério assim.',
          'date': '14/06/2016',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Ao saber que não estão sendo enviados pesquisas de Club DA a mais de 2 semanas.'
      },
      {
          'phrase': 'Vou perguntar se é sim de verdade ou sim de mentirinha.',
          'date': '14/06/2016',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'À respeito da validade das implementações ao saber que o parser que foi feito recentemente está com problemas.'
      },
      {
          'phrase': 'Nossasenhora, tá foda.',
          'date': '27/06/2016 às 11h42',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Ao saber, na segunda, que ainda não havia sido feito o reenvio das pesquisas que era pra ter sido feito na quarta.'
      },
      {
          'phrase': 'Quero saber como que isso acontece, significa que qualquer script do portal pode sumir do nada?!',
          'date': '06/07/2016 às 16h08',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Depois de saber que um script de processos magicamente voltou pra uma versão anterior.'
      },
      {
          'phrase': 'Não dá pra ser tão amador assim, cara. Na boa.',
          'date': '06/07/2016 às 16h14',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Depois de saber que alguns arquivos não estavam sendo versionados no GIT.'
      },
      {
          'phrase': 'São duas estradas pro mesmo destino.',
          'date': '11/08/2016 às 17h40',
          'whosaid': 'Henrique De Simone',
          'avatar': '2',
          'context': 'Explicando alguma coisa da API pro José.'
      },
      {
          'phrase': 'Eu vi aquilo acontecer na minha frente. Eu estava no mineirão.',
          'date': '01/09/2016 às 9h13',
          'whosaid': 'José Choucaria',
          'avatar': '1',
          'context': 'Com terror em seus olhos, relembrando o 7 à 1 da Alemanha em cima do Brasil.'
      },
      {
          'phrase': 'Não Zé, eu não vou fazer, não dá! Eu tenho que fazer minha mudança amanhã. Não dá! Zé, não dá! Eu não vou fazer isso pra você amanhã!',
          'date': '16/09/2016 às 20h17',
          'whosaid': 'Henrique De Simone',
          'avatar': '2',
          'context': 'Henrique gritando com o Zé no telefone tentando explicar que não ia ter tempo ábil pra fazer uma tarefa.'
      }
  ];

  // Using Math.round() will give you a non-uniform distribution!
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function quotePattern(i) {
    var pattern = '<blockquote class="blockquote">'+
      '<p class="blockquote__phrase">'+quotes[i].phrase+'</p>'+
      '<footer class="blockquote__footer">'+
        '<cite class="blockquote__whosaid">'+
          '<span>'+quotes[i].whosaid+'</span>'+
          '<img src="./images/person-'+quotes[i].avatar+'.jpg" alt="Avatar do '+quotes[i].whosaid+'" />'+
        '</cite>'+
        '<span class="blockquote__date">'+quotes[i].date+'</span>'+
        '<span class="blockquote__annotation">'+quotes[i].context+'</span>'+
      '</footer>'+
    '</blockquote>';

    return pattern;
  }

  // Apresenta uma citação no article
  function showOneQuote(i) {
    var article = document.querySelector('#article');
    var oneQuote = quotePattern(i);
    article.innerHTML = oneQuote;
  }

  // Injeta todas as citações no modal
  function showAllQuotes() {
    var modalBody = document.querySelector('#modalBody');
    var allQuotes = []; 
    for(var i = 0; i < quotes.length; i++) {
      allQuotes.push(quotePattern(i));
    }
    var allQuotesClean = allQuotes.join('');
    modalBody.innerHTML = allQuotesClean;
  }

  // CTA - Apresenta uma nova citação
  document.querySelector('#buttonViewOther').addEventListener('click', function(ev) {
    var randomNumber = getRandomInt(0, quotes.length);
    showOneQuote(randomNumber);
  }, false);

  // Inicializa funções que apresentam citações
  var randomNumber = getRandomInt(0, quotes.length);
  showOneQuote(randomNumber);
  showAllQuotes();


  // Modal
  var modal = document.querySelector('#modal');
  document.querySelector('#buttonViewAll').addEventListener('click', function() {
    modal.style.display = 'block';
  });
  document.querySelector('#modalClose').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  
  // Quando o usuário digitar o padrão informado, torna-se visível o elemento
  var zezimMeme = (function() {
    
    // Referencia o elemento #zezim
    var _nodeZezim = document.querySelector('#zezim');

    // Referencia o elemento #nyanCat
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