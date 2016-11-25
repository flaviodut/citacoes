(function() {

  // Modal
  var modal = document.querySelector('#modal');

  document.querySelector('#buttonViewAll').addEventListener('click', function() {
    modal.style.display = 'block';
  });

  document.querySelector('#modalClose').addEventListener('click', function() {
    modal.style.display = 'none';
  });

}());
