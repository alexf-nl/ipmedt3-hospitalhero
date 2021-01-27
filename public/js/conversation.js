document.getElementById("dialoog").addEventListener("click", volgendetext);

function volgendetext() {
  con bericht = 0
  if (bericht == 0) {
    document.getElementById("dialoog").src = "../img/dialoog2.png";
    bericht + 1
  }
  if (bericht == 1) {
    document.getElementById("dialoog").src = "../img/dialoog3.png";
    bericht + 1
  }
  if (bericht == 2) {
    document.getElementById("dialoog").src = "../img/dialoog4.png";
    bericht + 1
  }

}
