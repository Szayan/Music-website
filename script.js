const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const myAudio = document.getElementById("audio");
var isPlaying = false;	

function toggle() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function move() {
	var elem = document.getElementById("myBar");   
	var width = 1;
	var id = setInterval(frame, 10);
	function frame() {
	  if (width >= 100) {
		clearInterval(id);
	  } else {
		width++; 
		elem.style.width = width + '%'; 
	  }
	}
}

