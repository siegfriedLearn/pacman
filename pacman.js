//pos es la posición de la imágen de pacman
var pos = 0;

let pageWidth = window.innerWidth;
//Contiene las imágenes del movimiento de pacman
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];

// Sirve para determinar la dirección de pacman
// 0 = izquierda a derecha
// 1 = derecha a izquierda (reverse)
var direction = 0;

// Sirve para determinar qué imagen de pacman mostrar. Cambia entre 0 y 1
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
}
setInterval(Run, 300);
// Determina la dirección de pacman
function checkPageBounds(direction, imgWidth, pos, pageWidth) {

  let changeDirection;
  if (pos > pageWidth - imgWidth) {
    changeDirection = false;
    direction = 1;
  } else if (pos < 0) {
    changeDirection = true;
    direction = 0;
  }

  return direction;
}

module.exports = checkPageBounds;
