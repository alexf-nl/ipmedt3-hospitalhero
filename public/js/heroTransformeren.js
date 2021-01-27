
//gemaakt door alex
console.log('hero transformeren');



AFRAME.registerComponent("transformeren", {
  init:function() {
    let giraffe = document.getElementById('js--giraffe');
    let superHero = document.getElementById('js--supergiraffe');
},
  update:function(){

    this.el.addEventListener('click', () => {
      //giraffe.setAttribute('visible', 'false');
        let entity = this.el;
        entity.parentNode.removeAttribute('gltf-model');
        alert('superheld komt aan!');
        document.getElementById('js--supergiraffe').object3D.visible = true


      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
