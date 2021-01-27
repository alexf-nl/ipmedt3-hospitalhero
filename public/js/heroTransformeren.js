
//gemaakt door alex
console.log('hero transformeren');



AFRAME.registerComponent("transformeren", {
  init:function() {
    let giraffe = document.getElementById('js--giraffe');
    let superHero = document.getElementById('js--supergiraffe');
},
  update:function(){

    this.el.addEventListener('click', () => {
      giraffe.setAttribute('visible', 'false');
        let entity = this.el;
        entity.parentNode.removeChild(entity);
        alert('Superheld giraaf komt eraan!');
        entity.parentNode.setAttribute('gltf-model', '#supergiraffe');
        //entity.parentNode.removeChild(entity);
        //entity.parentNode.setAttribute('gltf-model', '#supergiraffe');
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
