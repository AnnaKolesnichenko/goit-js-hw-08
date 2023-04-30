/*import Vimeo from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


player.on('timeupdate', function() {
    //console.log('played the video!');
    throttle(onPlay, 1000);
});

const onPlay = function({seconds}) {    
    //if(data.seconds <= 0 || data.seconds < data.duration) {
        //return;
    //}
    localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));*/


  
import Player from '@vimeo/player';  
import throttle from 'lodash.throttle';  
 
const videoPlayer = document.getElementById('vimeo-player'); 
const player = new Player(videoPlayer); 

const CURRENT_TIME = "videoplayer-current-time";
 
function onPlay(data) { 
    localStorage.setItem(CURRENT_TIME , data.seconds);
}  
 
const currentTime = localStorage.getItem(CURRENT_TIME); 
 
if (currentTime) { 
  player.setCurrentTime(currentTime) 
  } 

player.on('timeupdate', throttle(onPlay, 1000)) 