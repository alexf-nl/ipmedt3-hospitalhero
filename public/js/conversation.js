// start spel pas tot dat de gebruiker op tekst ballon heeft geklikt
function uitleg_spel(){
  document.getElementById("dialoog").addEventListener("click", start_spel);
  if (0 == 1) {} else{ uitleg_spel();}
}
function start_spel(){
  document.getElementById("dialoog").src = "../img/2stebericht.png";
  document.getElementById("dialoog").addEventListener("click", bandje_loop);
  if (0 == 1) {} else{ start_spel();}
}


// loop per item om te blijven zoeken tot dat ze hem hebben gevonden + tekst om actie te ondernemen
function bandje_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardeband.png";
  document.getElementById("js--bandje").addEventListener("click", bandje_collect);
  if (0 == 1) {} else{ bandje_loop();}
}
function watjes_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardewatje.png";
  document.getElementById("js--watje").addEventListener("click", watjes_collect);
  if (0 == 1) {} else{ watjes_loop();}
}
function spuit_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardespuit.png";
  document.getElementById("js--spuit").addEventListener("click", spuit_collect);
  if (0 == 1) {} else{ spuit_loop();}
}
function pleister_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardepleister.png";
  document.getElementById("js--pleister").addEventListener("click", pleister_collect);
  if (0 == 1) {} else{ pleister_loop();}
}

let allesverzameld = 0;

function transformation(){
  AFRAME.registerComponent("transformeren", {
    init:function() {
      let giraffe = document.getElementById('js--giraffe');
      let superHero = document.getElementById('js--supergiraffe');
  },

    update:function(){

      alert('1');
      this.el.addEventListener('click', () => {
        //giraffe.setAttribute('visible', 'false');
<<<<<<< HEAD
=======
        //if(allesverzameld == 1){

>>>>>>> d973d7d3a6abac20d353706241752488bab77687
          let entity = this.el;
          entity.parentNode.removeAttribute('gltf-model');
          alert('superheld komt aan!');
          document.getElementById('js--supergiraffe').object3D.visible = true
<<<<<<< HEAD
=======
      //  }//else{
      //    alert('HET IS GELUKT');
    //    }
>>>>>>> d973d7d3a6abac20d353706241752488bab77687

        });

    },
    tick:function(){
    },
    pause:function(){},
    play:function(){}
  });

  if (0 == 1) {} else{ pleister_loop();}
}


//delete element and compliment tekst voor gebruiker
function bandje_collect(){
    document.getElementById('js--bandje').remove();
    watjes_loop();
}
function watjes_collect(){
    document.getElementById('js--watje').remove();
    spuit_loop()
}
function spuit_collect(){
    document.getElementById('js--spuit').remove();
    pleister_loop();
}
function pleister_collect(){
    document.getElementById('js--pleister').remove();
    allesverzameld = allesverzameld + 1;
    if(allesverzameld == 1) {
    transformation();
  }
}

uitleg_spel();
