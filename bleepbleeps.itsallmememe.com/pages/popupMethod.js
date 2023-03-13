const vids={
              'video1':'./images/t/23/assets/video1.mp4',
              'video2':'../images/t/23/assets/video1.mp4',
              'video3':'../images/t/23/assets/video1.mp4',
              'video4':'../images/t/23/assets/video1.mp4',
              'video5':'../images/t/23/assets/video1.mp4',
              'video6':'../images/t/23/assets/video1.mp4',
              'video7':'../images/t/23/assets/video1.mp4',
              'video8':'../images/t/23/assets/video1.mp4',
          };


function handleClick(url){
    function handleClose(element){
      element.remove();
    };
    const containerDiv = document.createElement('div');
    const id='popup-container-123';
    containerDiv.id=id;
    containerDiv.style.cssText='position:absolute;width:100%;height:100%;background-color:#00000094;display:flex;justify-content:center;align-items:center;inset-block:0;inset-inline:0;z-index:1000'
    const popupDiv = document.createElement('div');
    popupDiv.style.cssText='position:relative;width:600px;height:360px;background-color:#000;border-radius:20px;border:3px solid #087de8;padding:20px;'
    const closeDiv = document.createElement('div');
    closeDiv.style.cssText='position:absolute;width:30px;height:30px;background-color:red;border-radius:50%;border:2px solid black;inset-block-start:-10px;inset-inline-end:-10px;z-index:1001;overflow:hidden;display:flex;align-items:center;justify-content:center;cursor:pointer;'
    closeDiv.innerHTML='<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
    closeDiv.onclick=()=>{handleClose(containerDiv)};
    popupDiv.appendChild(closeDiv);
    containerDiv.appendChild(popupDiv);
    const newVideo = document.createElement('video');
    newVideo.style.cssText='width:100%;height:100%;'
    newVideo.src=url;
    newVideo.controls=true;
    popupDiv.appendChild(newVideo);
    document.body.appendChild(containerDiv);
  }