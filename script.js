const ddu = document.getElementById('ddu')
const dduu = document.getElementById('dduu')
const ddubtn = document.getElementById('ddubtn')
const dduubtn = document.getElementById('dduubtn')

ddubtn.addEventListener('click', function() {
  ddu.currentTime = 0;
  ddu.play();
})

dduubtn.addEventListener('click', function() {
  dduu.currentTime = 0;
  dduu.play();
})