const m = document.getElementById('modal');
const mT = document.getElementById('modal-text');
const mC = document.getElementById('modal-cover');

function doModal(inner) {
  let content = true;
  if(!inner) {
    inner = '<i class="fa fa-fw fa-exclamation-triangle"></i> Error! Please try doing what you did again.';
    content = false;
  }
  m.classList = 'shown';
  mC.classList = 'shown';
  mT.innerHTML = inner;
  if(!content) {
    window.setTimeout(function(){
      closeModal();
    }, 1000);
  }
}


function closeModal() {
  m.classList = 'hidden';
  mC.classList = 'hidden';
  window.setTimeout(function(){
    mT.innerHTML = '';
  }, 300);
}
