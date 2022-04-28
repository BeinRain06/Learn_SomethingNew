var play=document.getElementById('play');
var range=document.getElementById('play');
var videoTime=document.getElementById('play');
var videoDuration=document.getElementById('play');
var life_video=document.getElementById('play');

// add EventListeners
play.addEventListener('click', function(){
  if (life_video.paused){
    life_video.play();
    document.querySelector('#play i').classList.replace('fa-play', 'fa-pause');
  }
  else{
    life_video.pause();
    document.querySelector('#play i').classList.replace('fa-pause', 'fa-play');
  }
})

range.addEventListener('input', function(){
  life_video.currenTime = range.value;
  range.max = Math.floor(life_video.duration);
})

life_video.addEventListener('timeupdate', function(){
  videoTime.innerHTML= life_video.currenTime;
  range.value = life_video.currenTime;
  range.max = Math.floor(life_video.duration);
})

window.onload = function(){
  videoTime.innerHTML= life_video.currenTime;
  videoDuration.innerHTML = Math.floor(life_video.duration);
}