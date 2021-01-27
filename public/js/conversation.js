// elements click eventes all blender models

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
    document.getElementById("js--bandje").addEventListener("click", bandjealert);
  }
  alert("Ik ben uit de while loop");
  if (collect_bandje == 1) {
    alert("Ik ben uit de while loop EN HEB HET BANDJE GEVONDEN");
    document.getElementById("dialoog").src = "../img/dialoog3.png";
  }
  if (bericht == 2) {
  document.getElementById("dialoog").src = "../img/dialoog4.png";
  }

}








function bandjealert(){
    collect_bandje = 1;
    document.getElementById('js--bandje').remove();
}
