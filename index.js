AOS.init();

function play() {
  var audio = document.getElementById("audio");
  audio.play();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

const tombol = () => {
  const btn = document.querySelector('.open-amplop');
  const red = document.querySelector('.red')

  btn.addEventListener('click', () => {
    red.classList.toggle('red-open');
  });
}

tombol();