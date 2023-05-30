import HashVplayer from '@vimeo/player';
import videoTht from 'lodash.throttle';

const player = new HashVplayer(document.getElementById('vimeo-player'), {
  loop: true,
  quality: '4K',
});
function onTimeUpdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
player.on('timeupdate', videoTht(onTimeUpdate, 1000));

const value = localStorage.getItem('videoplayer-current-time');
if (value) {
  player.setCurrentTime(value);
}
