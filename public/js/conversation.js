// elements click eventes all blender models
document.getElementById("js--bandje").addEventListener("click", bandjealert);
document.getElementById("js--spuit").addEventListener("click", bandjealert);
document.getElementById("js--giraffe").addEventListener("click", bandjealert);

document.getElementById("dialoog").addEventListener("click", volgendetext);

let collect_bandje = 0;



// bericht geladen 1ste bericht

let bericht = 0;
function volgendetext() {
  // bericht geladen 2de bericht
  document.getElementById("dialoog").src = "../img/dialoog2.png";
  while (collect_bandje == 0){
    alert("we zijn nu in de while loop");
    break;
  }
  if (bericht == 1) {
    document.getElementById("dialoog").src = "../img/dialoog3.png";
  }
  if (bericht == 2) {
  document.getElementById("dialoog").src = "../img/dialoog4.png";
  }
bericht = bericht + 1
}








function bandjealert(){
    alert("Hello! I am an alert box!!");
    document.getElementById('js--bandje').remove();
}
