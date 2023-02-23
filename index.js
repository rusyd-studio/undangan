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
  const btn = document.querySelector('.btn-amplop');
  const red = document.querySelector('.red');

  const biru = document.getElementById('blue');
  const hijau = document.getElementById('green');
  const wave_1 = document.getElementById('wave_1');
  const kuning = document.getElementById('yellow');
  const brown = document.getElementById('brown');
  const gallery = document.getElementById('gallery');
  const wave_2 = document.getElementById('wave_2');
  const quotes = document.getElementById('quotes');
  const end = document.getElementById('end');
  const figura = document.getElementById('figura');
  display = 0;

  btn.addEventListener('click', () => {
    red.classList.toggle('red-open');
    
    if (display == 0) {
      biru.style.visibility = 'visible';
      hijau.style.visibility = 'visible';
      wave_1.style.visibility = 'visible';
      kuning.style.visibility = 'visible';
      brown.style.visibility = 'visible';
      gallery.style.visibility = 'visible';
      wave_2.style.visibility = 'visible';
      quotes.style.visibility = 'visible';
      end.style.visibility = 'visible';
      figura.style.visibility = 'visible';
      display = 1;
    } else {
      biru.style.visibility = 'hidden';
      hijau.style.visibility = 'hidden';
      wave_1.style.visibility = 'hidden';
      kuning.style.visibility = 'hidden';
      brown.style.visibility = 'hidden';
      gallery.style.visibility = 'hidden';
      wave_2.style.visibility = 'hidden';
      quotes.style.visibility = 'hidden';
      end.style.visibility = 'hidden';
      figura.style.visibility = 'hidden';
      display = 0;
    }

  });
}

tombol();