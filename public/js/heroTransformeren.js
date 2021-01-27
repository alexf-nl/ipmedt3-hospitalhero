
//gemaakt door alex
console.log('hero transformeren');



AFRAME.registerComponent("transformeren", {
  init:function() {
    const giraffe = document.getElementById('js--giraffe');
    const superHero = document.getElementById('js--supergiraffe');
//    entity1.removeChild(entity1);
},
  update:function(){
    this.el.addEventListener('click', () => {
      //  let entity = this.el;
        this.el.setAttribute('visible', 'false');
        //entity.parentNode.removeChild(entity);
        alert('Superheld giraaf komt eraan!');
        superHero.parentNode.setAttribute('visible', 'true');
      //  entity.parentNode.removeChild(entity);
      //  entity.parentNode.setAttribute('gltf-model', '#supergiraffe');
      //  entity1.parentNode.appendChild(entity1);
        //test

      //  element = '<a-entity class="clickable" gesture-handler position="0 0 0" class="item" id="js--supergiraffe" gltf-model="#supergiraffe" scale="1 1 1"></a-entity>';
      //  element.appendChild(element);
      //  element.parentNode.appendChild(element);

      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
