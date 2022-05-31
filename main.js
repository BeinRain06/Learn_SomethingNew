// navbar 

const doc = document.querySelector('html');
let sibling = document.querySelectorAll('.log_section ') ;

doc.addEventListener('click', function(e){

  console.log(e.target);
  if(e.target.classList.contains('log_section')){
    e.target.classList.toggle('current');
    
    let i;
    for( let i=0; i<sibling.length; i++) {
      if(sibling[i] !== e.target) {
        sibling[i].classList.remove('current');
     } 
    }
  }

})



var play=document.getElementById('play');
var range=document.getElementById('range');
var videoTime=document.getElementById('videoTime');
var videoDuration=document.getElementById('videoDuration');
var life_video=document.getElementById('life_video');



// add EventListeners


play.addEventListener('click', function(){
  if (life_video.paused){
    life_video.play();
    document.querySelector('#play ').innerHTML = 'Pause';
  }
 
  else{
    life_video.pause();
    document.querySelector('#play ').innerHTML = 'Play';
  }
})
  

range.addEventListener('input', function(){
  life_video.currentTime = range.value;
  range.max = Math.floor(life_video.duration);
})

life_video.addEventListener('timeupdate', function(){

  videoTime.innerHTML= Math.floor(life_video.currentTime);
  range.value = life_video.currentTime;
  range.max = Math.floor(life_video.duration);
})

window.onload = function(){
  videoTime.innerHTML= Math.floor(life_video.currentTime);
  videoDuration.innerHTML = Math.floor(life_video.duration);

}



