

const trailer = document.getElementById("cursor");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}



window.onmousemove = e => {
  interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  animateTrailer(e, interacting);

}