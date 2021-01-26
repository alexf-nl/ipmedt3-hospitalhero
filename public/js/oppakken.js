window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--camera');

  let pickups = document.getElementsByClassName('js--pickup');


  for (let i = 0; i < pickups.length; i++) {
    pickups[i].addEventListener('click', function(evt){
      if (hold == null) {
      hold = "box";
      this.remove();
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
