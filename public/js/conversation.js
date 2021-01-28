// elements click eventes all blender models

// document.getElementById("js--spuit").addEventListener("click", bandjealert);
// document.getElementById("js--giraffe").addEventListener("click", bandjealert);



let collect_bandje = 0;


function start_spel(){
  document.getElementById("dialoog").addEventListener("click", volgendetext);
  if (0 == 1) {} else{ start_spel();}
}
// bericht geladen 1ste bericht
function bandje_loop(){
  document.getElementById("js--bandje").addEventListener("click", bandjealert);
  if (0 == 1) {} else{ bandje_loop();}
}




function volgendetext() {
  // bericht geladen 2de bericht
  document.getElementById("dialoog").src = "../img/dialoog2.png";
  bandje_loop();
}

function new_tekst(){
  if (collect_bandje == 1) {
    // bericht geladen 3de bericht
    document.getElementById("dialoog").src = "../img/dialoog3.png";
  }
}
function bandjealert(){
    collect_bandje = collect_bandje + 1;
    document.getElementById('js--bandje').remove();
    new_tekst();

}
