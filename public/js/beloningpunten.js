//gemaakt door alex
console.log('punten ontvangen');

AFRAME.registerComponent("beloningpunten", {
  init:function() {
    let punten = 0;
    const punten1 = document.getElementById('js--punten');
    const beloningen = document.querySelectorAll("[beloning]");

  this.ontvangBeloning = function() {
      for(let i = 0; i < beloningen.length; i++) {
      console.log('overheen gaan werkt');
      punten1.setAttribute("value", "Aantal punten ontvangen: " + punten);
      }
    }
  this.el.addEventListener("mouseclick", this.ontvangBeloning);

  },
  update:function(){
    this.ontvangBeloning();
    punten += 1;


  },
  tick:function(){},
  pause:function(){},
  play:function(){}
});
