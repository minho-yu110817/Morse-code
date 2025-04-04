const ddu = document.getElementById('ddu');
const dduu = document.getElementById('dduu');
const ddubtn = document.getElementById('ddubtn');
const dduubtn = document.getElementById('dduubtn');
const morse = document.getElementById('morse');
const resetbtn = document.getElementById('resetbtn');

const morseToChar = {
  '-----': '0',
  '·----': '1',
  '··---': '2',
  '···--': '3',
  '····-': '4',
  '·····': '5',
  '-····': '6',
  '--···': '7',
  '---··': '8',
  '----·': '9',
};

let currentMorse = '';

function handleInput(symbol, sound) {
  currentMorse += symbol;
  morse.innerHTML += symbol;

  if (morseToChar[currentMorse]) {
    const char = morseToChar[currentMorse];
    morse.innerHTML = morse.innerHTML.slice(0, -currentMorse.length) + char;
    currentMorse = '';
  }

  sound.currentTime = 0;
  sound.play();
}

ddubtn.addEventListener('click', () => handleInput('·', ddu));
dduubtn.addEventListener('click', () => handleInput('-', dduu));

resetbtn.addEventListener('click', function () {
  morse.innerHTML = '';
  currentMorse = '';
});
