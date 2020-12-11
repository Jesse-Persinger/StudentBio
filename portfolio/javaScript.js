//image rotation for portfolio

const image = document.createElement('img')
image.setAttribute("class", "port container");

function Gallery(){
image.src  = "https://i.ibb.co/mbFzKv9/stonehead.png"

document.getElementById('photoLoop').appendChild(image)

setTimeout(function(){ image.src="https://i.ibb.co/gvK4q8J/simple-species.png"; }, 10000);

setTimeout(function(){ image.src="https://i.ibb.co/RCnnf8T/TABLECONCEPT.png"; }, 20000);

setTimeout(function(){ image.src="https://i.ibb.co/FmrrpBd/rpgbasic.png"; }, 30000);

setTimeout(function(){ image.src="https://i.ibb.co/Ydxy3G9/tacoadvpic.png"; }, 40000)

setTimeout(function(){Gallery();}, 50000);
}
Gallery()

// contact image

// footer