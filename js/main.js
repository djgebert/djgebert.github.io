/* Get elements by ID after the window loads - not available before*/
let menuButtonElement;
let menuButtonContainerElement;
let menuButtonPathElement;
let navListElement;
window.onload = function() {
  menuButtonContainerElement = document.getElementById("menuIconContainer");
  menuButtonContainerElement.addEventListener("click", toggleMenu);
  menuButtonPathElement = document.getElementById("menuButtonPath");
  menuButtonElement = document.getElementById("menuButton");
  navListElement = document.getElementById("navList");
}

/* Menu toggle functionality*/
let menuIsOpen = false;
async function toggleMenu(e) {
  if(menuIsOpen) {
    menuButtonElement.style = "transform: scaleX(0.3) scaleY(0.3)";
    // Sleep to allow transition to occur without interruption
    await (function() {return new Promise((resolve, reject)=> {setTimeout(resolve, 100);});})();
    // Icon from https://iconmonstr.com/menu-1-svg/
    menuButtonPathElement.setAttribute("d", "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z");
    menuButtonElement.style = "transform: scaleX(1) scaleY(1)";
    menuIsOpen = false;
    navListElement.style = "top: auto; bottom: 0;";
  }
  else {
    menuButtonElement.style = "transform: scaleX(0.3) scaleY(0.3)";
    // Sleep to allow transition to occur without interruption
    await (function() {return new Promise((resolve, reject)=> {setTimeout(resolve, 100);});})();
    // Icon from https://iconmonstr.com/x-mark-1-svg/
    menuButtonPathElement.setAttribute("d", "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z");
    menuButtonElement.style = "transform: scaleX(1) scaleY(1)";
    menuIsOpen = true;
    navListElement.style = "top: 2rem; bottom: auto;";
  }
}