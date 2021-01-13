/* Get elements by ID after the window loads - not available before*/
let menuButtonElement;
let menuButtonPathElement;
window.onload = function() {
  menuButtonElement = document.getElementById("menuButton");
  menuButtonPathElement = document.getElementById("menuButtonPath");menuButtonElement.addEventListener("click", toggleMenu);
}

/* Menu toggle functionality */
let menuIsOpen = false;
function toggleMenu(e) {
  console.log("Clicked");
  if(menuIsOpen) {
    menuButtonPathElement.setAttribute("d", "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z");
    menuIsOpen = false;
  }
  else {
    menuButtonPathElement.setAttribute("d", "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z");
    menuIsOpen = true;
  }
}