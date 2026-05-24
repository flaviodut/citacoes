import './styles/reset.css';
import './styles/style.css';
import { quotes } from './data/data.js';
import { getRandomInt } from './scripts/helpers.js';
import { showOneQuote, showAllQuotes } from './scripts/quotes.js';
import zezimMeme from './scripts/zezim-meme.js';

const $modal = document.querySelector('#modal');
const $buttonViewOtherQuote = document.querySelector('#buttonViewOther');
const $buttonViewAllQuotes = document.querySelector('#buttonViewAll');
const $buttonModalClose = document.querySelector('#modalClose');

$buttonViewOtherQuote.addEventListener('click', () => showOneQuote(getRandomInt(0, quotes.length)), false);
$buttonViewAllQuotes.addEventListener('click', () => $modal.style.display = 'block');
$buttonModalClose.addEventListener('click', () => $modal.style.display = 'none');

showOneQuote(getRandomInt(0, quotes.length));
showAllQuotes();
zezimMeme();

// Remove loading screen when page is fully loaded
window.addEventListener('load', () => {
  const $loading = document.querySelector('#loading');
  if ($loading) {
    $loading.style.display = 'none';
  }
});
