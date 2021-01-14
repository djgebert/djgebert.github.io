/* Get elements by ID after the window loads - not available before*/
let menuButtonElement;
let menuButtonContainerElement;
let menuButtonPathElement;
let navListElement;
let heroElement;
window.onload = function() {
  menuButtonContainerElement = document.getElementById("menuIconContainer");
  menuButtonContainerElement.addEventListener("click", toggleMenu);
  menuButtonPathElement = document.getElementById("menuButtonPath");
  menuButtonElement = document.getElementById("menuButton");
  navListElement = document.getElementById("nav");
  heroElement = document.getElementById("hero");
  heroElement.addEventListener("click", closeMenuViaHero);
}

// Menu toggle functionality
let menuIsOpen = false;
async function toggleMenu(e) {
  if(menuIsOpen) {
    menuButtonElement.style = "transform: scaleX(0.3) scaleY(0.3)";
    navListElement.style = "top: -15rem;";
    // Sleep to allow transition to occur without interruption
    await (function() {return new Promise((resolve, reject)=> {setTimeout(resolve, 100);});})();
    // Icon from https://iconmonstr.com/menu-1-svg/
    menuButtonPathElement.setAttribute("d", "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z");
    menuButtonElement.style = "transform: scaleX(1) scaleY(1)";
    menuIsOpen = false;
  }
  else {
    menuButtonElement.style = "transform: scaleX(0.3) scaleY(0.3)";
    navListElement.style = "top: 2rem;";
    // Sleep to allow transition to occur without interruption
    await (function() {return new Promise((resolve, reject)=> {setTimeout(resolve, 100);});})();
    // Icon from https://iconmonstr.com/x-mark-1-svg/
    menuButtonPathElement.setAttribute("d", "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z");
    menuButtonElement.style = "transform: scaleX(1) scaleY(1)";
    menuIsOpen = true;
  }
}

/* If menu is open, allow it to be closed by clicking hero, as users
 * may do this intuitively
 */
function closeMenuViaHero(e) {
  if(menuIsOpen) toggleMenu(e);
}