export default function decorate(block){
let anchorTag = document.querySelector('.section-video .button-container a');
var video = document.createElement('video');
video.src = anchorTag.href;
video.autoplay="autoplay";
video.muted="muted";
video.setAttribute('loop', '1');
anchorTag.parentNode.replaceChild(video, anchorTag);

}