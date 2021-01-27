
//gemaakt door alex
console.log('punten ontvangen');

AFRAME.registerComponent("transformeren", {
  init:function() {
    const giraffe = document.getElementById('js--giraffe');
    const superHero = document.getElementById('js--superHero');
},
  update:function(){
  },
  tick:function(){
    this.el.addEventListener('click', () => {
        let entity = this.el;
        alert('Hero verwijderen werkt');
        entity.parentNode.removeChild(entity);
      });

  },
  pause:function(){},
  play:function(){}
});
