window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--camera');


  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;

  const placeholders = document.getElementsByClassName('js--placeholder');
  let scene = document.getElementById('js--scene');

function addListeners() {
  for (let i = 0; i < pickups.length; i++) {
    pickups[i].addEventListener('click', function(evt){
      if (hold == null) {
        alert('Je heeft dit object verzameld! Dit is object ' + hold + " van de 4!")
        hold += 1;
        document.getElementById('js--bandje').remove();
          alert('Je heeft dit object verzameld! Dit is object ' + hold + " van de 4!")
    } if (hold == 1) {
        alert('Je heeft dit object verzameld! Dit is object ' + hold + " van de 4!")
      hold += 1;
      document.getElementById('js--spuit').remove();
      alert('Je heeft dit object verzameld! Dit is object ' + hold + " van de 4!")
  } if (hold == 2) {
    hold += 1;
      alert('Je heeft dit object verzameld! Dit is object ' + hold + " van de 4!")
        this.remove();
}
    });
  }
}

addListeners();

  for (let i = 0; i < placeholders.length; i++) {
    placeholders[i].addEventListener('click', function(evt){
      if (hold == "box"){
        let box = document.createElement('a-box');
        box.setAttribute("class", "js--pickup js--interact");
        box.setAttribute("color", "green");
        box.setAttribute("position", {x: this.getAttribute('position').x, y:"0.5",
        z:this.getAttribute('position').z});
        scene.appendChild(box);
        document.getElementById("js--hold").remove();
        addListeners();
        hold = null;
      }
    });
  }



  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(evt){
      let att = document.createAttribute("animation");
      att.value = "property: position; easing: linear; dur: 2000; to: "
      + this.getAttribute('position').x + " 1.6 "
      + this.getAttribute('position').z;
      camera.setAttribute('animation', att.value);
  });
  }

  };