
//gemaakt door alex
console.log('hero transformeren');



AFRAME.registerComponent("transformeren", {
  init:function() {
    const giraffe = document.getElementById('js--giraffe');
    const superHero = document.getElementById('js--superHero');
},
  update:function(){
    this.el.addEventListener('click', () => {
        let entity = this.el;
        entity.parentNode.removeChild(entity);
        alert('Superheld giraaf komt eraan!');
        let sceneEl = document.querySelector('a-scene');
        //let entityEl = document.createElement('a-entity');
        const superHeroGiraffe = sceneEl.querySelector('#js--superHero');
        let entity1 = '<a-entity class="clickable" gesture-handler position="0 0 0" class="item" id="js--supergiraffe" gltf-model="#supergiraffe" scale=".5 .5 .5"></a-entity>';
        sceneEl.appendChild(superHeroGiraffe);
      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
