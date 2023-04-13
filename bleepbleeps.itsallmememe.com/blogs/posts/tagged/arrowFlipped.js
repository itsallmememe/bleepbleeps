function flipImage180(imgElement) {
    if (imgElement.style.transform === "rotate(180deg)") {
        imgElement.style.transform = "none";
      } else {
        imgElement.style.transform = "rotate(180deg)";
      }
  };