document.getElementById("dialoog").addEventListener("click", volgendetext);
var bericht = 0;
function volgendetext() {
  if (bericht == 0) {
    document.getElementById("dialoog").src = "../img/dialoog2.png";
    bericht = bericht + 1
  }
  if (bericht == 1) {
    document.getElementById("dialoog").src = "../img/dialoog3.png";
    bericht = bericht + 1
  }
  if (bericht == 2) {
    document.getElementById("dialoog").src = "../img/dialoog4.png";
    bericht = bericht + 1
  }

}
