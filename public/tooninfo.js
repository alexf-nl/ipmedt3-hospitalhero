//functie om te kunnen teleporten naar een ander object
//gemaakt door alex f
console.log('hi');
AFRAME.registerComponent("tooninfo", {
  init:function() {
    const zuster = document.getElementById("js--zuster");
    const bandje = document.getElementById("js--bandje");
    const spuit = document.getElementById("js--spuit");
    const giraffe = document.getElementById("js--giraffe");

  this.toonInfo = function() {
    console.log('het werkt');
    }
  }
  this.el.addEventListener("mouseenter", this.toonInfo);
  },
  update:function(){
    this.toonInfo();

  },
  tick:function(){},
  pause:function(){},
  play:function(){}
});
