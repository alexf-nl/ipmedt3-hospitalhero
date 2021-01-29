//const cursor = document.getElementById("js--scene");

/*let box = document.createElement("a-box");
box.setAttribute("width",1);
box.setAttribute("height",1);
box.setAttribute("depth",1);
box.setAttribute("color","tomato");
box.setAttribute("position","-3 -2 -20");
box.setAttribute("id","js--box2");
cursor.appendChild(box);
*/

// animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true

/*document.getElementById("js--marker").addEventListener("markerFound",() => {
  box.setAttribute("animation","property: position; to: 1 8 -10; dur: 5000; easing: linear; loop: true");
});*/

//functie om te kunnen teleporten naar een ander object
//gemaakt door alex f
// console.log('hi');
/*AFRAME.registerComponent("tooninfo", {
  init:function() {
    const zuster = document.getElementById("js--zuster");
    const bandje = document.getElementById("js--bandje");
    const spuit = document.getElementById("js--spuit");
    const giraffe = document.getElementById("js--giraffe");

  this.toonInfo = function() {
    console.log('overheen gaan werkt');
    let text = document.createElement("a-text");
    text.setAttribute("color","black");
    text.setAttribute("position","6 6 0");
    text.setAttribute("value", "dit is een spuit")
    text.setAttribute("id","js--textGiraffe");
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

*/

// sceneEl.addEventListener("markerFound", (e) => {
//     isMarkerVisible = true;
//     console.log(isMarkerVisible);
//
// });
//
// sceneEl.addEventListener("markerLost", (e) => {
//     isMarkerVisible = false;
//     console.log(isMarkerVisible);
// });
//
//
// //alex f - functie om een blender model te kunnen roteren en schalen binnen AR
//
//
//
// handleScale(event) {
//     if (isMarkerVisible) {
//       this.scaleFactor *=  1 + event.detail.spreadChange / event.detail.startSpread;
//
//       this.scaleFactor = Math.min(
//         Math.max(this.scaleFactor, this.data.minScale),
//         this.data.maxScale
//       );
//
//       el.object3D.scale.x = scaleFactor * initialScale.x;
//       el.object3D.scale.y = scaleFactor * initialScale.y;
//       el.object3D.scale.z = scaleFactor * initialScale.z;
//     }
//   }
