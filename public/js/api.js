const BASE_URL = "https://www.superheroapi.com/api.php/2953517648262634/";
apiNaam = document.getElementById('js--apiNaam')
const apizetten = document.querySelectorAll("[apizetten]");

randomHero = function() {
  for(let i = 0; i < apizetten.length; i++) {
  let randomNum = Math.floor(Math.random() * 100 + 1);
      fetch(BASE_URL + randomNum)
      .then(response => response.json())
      .then(data => apizetten[i].setAttribute("value", "Naam hero:" + " " + data.name));
            }
          }
        //this.el.addEventListener("mouseenter", this.newFilm);

randomHero();
