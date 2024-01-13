import { quotes } from '../data/data.js';

function quotePattern(i) {
  return `
  <blockquote class="blockquote">
    <p class="blockquote__phrase">${quotes[i].phrase}</p>
    <footer class="blockquote__footer">
      <cite class="blockquote__whosaid">
        <span>${quotes[i].whosaid}</span>
        <img src="./images/${quotes[i].avatar}" alt="Avatar do ${quotes[i].whosaid}" />
      </cite>
      <span class="blockquote__date">${quotes[i].date}</span>
      <span class="blockquote__annotation">${quotes[i].context}</span>
    </footer>
  </blockquote>`;
}

// Apresenta uma citação no article
function showOneQuote(i) {
  const article = document.querySelector('#article');
  const oneQuote = quotePattern(i);
  article.innerHTML = oneQuote;
}

// Injeta todas as citações no modal
function showAllQuotes() {
  const modalBody = document.querySelector('#modalBody');
  const allQuotes = [];

  for(var i = 0; i < quotes.length; i++) {
    allQuotes.push(quotePattern(i));
  }

  const allQuotesClean = allQuotes.join('');
  modalBody.innerHTML = allQuotesClean;
}

export {
  showOneQuote,
  showAllQuotes,
}