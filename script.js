const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const myAudio = document.getElementById("audio");


	

function toggle() {
	if (!myAudio.paused && !myAudio.ended) {
		myAudio.pause();
	}
	else {
		myAudio.play();
	}
}

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

document.getElementById('buttonid').addEventListener('click', uploadFile);
function uploadFile(){
document.getElementById('fileid').click()
}

function upload() {

}

