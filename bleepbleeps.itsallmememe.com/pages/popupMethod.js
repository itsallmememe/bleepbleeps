const vids = {
  'video1': './videos/BB Smart Family.mp4',
  'video2': '../videos/BBAndyCam.mp4',
  'video3': '../videos/BB Lily Loco.mp4',
  'video4': '../videos/BB Hungry Henry.mp4',
  'video5': '../videos/BB Benjamin Brush.mp4',
  'video6': '../videos/BB Sammy Screamer.mp4',
  'video7': '../videos/BB Suzy Snooze.mp4',
  'video8': '../videos/BB Tommy Time.mp4',
  'video9': '../videos/BB Tony Tempa.mp4',
};


function handleClick(url) {
  function handleClose(element) {
    element.remove();
  };
  const containerDiv = document.createElement('div');
  const id = 'popup-container-123';
  containerDiv.id = id;
  containerDiv.style.cssText = 'position:absolute;width:100%;height:100%;background-color:#00000094;display:flex;justify-content:center;align-items:center;inset-block:0;inset-inline:0;z-index:1000'
  const popupDiv = document.createElement('div');
  popupDiv.style.cssText = 'position:relative;width:600px;height:360px;background-color:#fff;border-radius:5px;border:3px solid #087de8;padding:1px;'
  const closeDiv = document.createElement('div');
  closeDiv.style.cssText = 'position:absolute;width:30px;height:30px;background-color:rgb(50, 150, 220);border-radius:50%;inset-block-start:-10px;inset-inline-end:-10px;z-index:1001;overflow:hidden;display:flex;align-items:center;justify-content:center;cursor:pointer;'
  closeDiv.innerHTML = '<svg width="35" height="35" viewBox="0 0 24 24" fill="#087de8" xmlns="http://www.w3.org/2000/svg"><path d="M9.16998 14.83L14.83 9.17004" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.83 14.83L9.16998 9.17004" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>'
  closeDiv.onclick = () => { handleClose(containerDiv) };
  popupDiv.appendChild(closeDiv);
  containerDiv.appendChild(popupDiv);
  const newVideo = document.createElement('video');
  newVideo.autoplay = true;
  newVideo.style.cssText = 'width:100%;height:100%;'
  newVideo.src = url;
  newVideo.controls = true;
  popupDiv.appendChild(newVideo);
  document.body.appendChild(containerDiv);
}