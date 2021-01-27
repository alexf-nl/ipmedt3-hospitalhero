
//gemaakt door alex
console.log('punten ontvangen');

const camera = document.getElementById('js--camera');
AFRAME.registerComponent("transformeren", {
  init:function() {
    const giraffe = document.getElementById('js--giraffe');
    const superHero = document.getElementById('js--superHero');
},
  update:function(){
    this.el.addEventListener('click', () => {
        let entity = this.el;
        alert('Superheld giraaf komt eraan!');
        entity.parentNode.removeChild(entity);
        alert('Super giraffe is toegevoegd!');
        camera.innerHTML += '<a-entity transformeren class="clickable" gesture-handler position="0 0 0" class="item" id="js--giraffe" gltf-model="#supergiraffe" scale="2 2 2"></a-entity>';
      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
