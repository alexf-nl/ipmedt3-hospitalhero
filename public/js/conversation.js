// elements click eventes all blender models

document.getElementById("js--spuit").addEventListener("click", bandjealert);
document.getElementById("js--giraffe").addEventListener("click", bandjealert);

document.getElementById("dialoog").addEventListener("click", volgendetext);

let collect_bandje = 0;



// bericht geladen 1ste bericht
function bandje_loop(){
  document.getElementById("js--bandje").addEventListener("click", bandjealert);
  if (collect_bandje == 1) {
    alert("ik heb het bandje");
  }else{bandje_loop();}

}

function volgendetext() {
  // bericht geladen 2de bericht
  document.getElementById("dialoog").src = "../img/dialoog2.png";
  bandje_loop();
}

function new_tekst(){
  alert("ik heb het bandje en ben uit de loop");
  if (collect_bandje == 1) {
    document.getElementById("dialoog").src = "../img/dialoog3.png";
  }
}





function bandjealert(){
    collect_bandje = collect_bandje + 1;
    document.getElementById('js--bandje').remove();
    new_tekst();

}
