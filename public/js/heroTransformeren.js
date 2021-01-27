
//gemaakt door alex
console.log('hero transformeren');

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
        camera.innerHTML += '<a-entity class="clickable" gesture-handler position="0 0 0" class="item" id="js--supergiraffe" gltf-model="#supergiraffe" scale=".5 .5 .5"></a-entity>';
      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
