
var play=document.getElementById('play');
var range=document.getElementById('range');
var videoTime=document.getElementById('videoTime');
var videoDuration=document.getElementById('videoDurztion');
var life_video=document.getElementById('life_video');

// add EventListeners
play.addEventListener('click', function(){
  if (life_video.paused()){
    life_video.play();
    document.querySelector('#play ').innerText='pause';
  }
  else{
    life_video.pause();
    document.querySelector('#play ').innerText='play';
  }
})

range.addEventListener('input', function(){
  life_video.currentTime() = range.value();
  range.max() = Math.floor(life_video.duration());
})

life_video.addEventListener('time update ', function(){
  videoTime.innerHTML()= life_video.currenTime();
  range.value() = life_video.currenTime();
  range.max() = Math.floor(life_video.duration());
})

window.onload = function(){
  videoTime.innerHTML()= life_video.currenTime();
  videoDuration.innerHTML() = Math.floor(life_video.duration());
}


// navbar 

    const doc = document.querySelector('html');
    let nav_link = document.querySelector('.navbar ul li a');
    let sibling = document.querySelectorAll('.navbar ul li a ') ;
    let siblings = sibling.parentNode;

    nav_link.addEventListener('click', function(){
      
      for( let i=0; i<siblings.length; i++); {
        if(sibling[i] !== this.nav_link) {
           this.nav_link.classList.toggle('current');

        }
        else{
          this.nav_link.classList.toggle('current');
        }
    }
    })
