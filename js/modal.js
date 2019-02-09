const m = document.getElementById('modal');
const mT = document.getElementById('modal-text');
const mC = document.getElementById('modal-cover');

function doModal(inner) {
  m.classList = 'shown';
  mC.classList = 'shown';
  mT.innerHTML = inner;
}


function closeModal() {
  m.classList = 'hidden';
  mC.classList = 'hidden';
  window.setTimeout(function(){
    mT.innerHTML = '';
  }, 300);
}
