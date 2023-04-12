import {posters1} from "./data/data.js";
import {posters2} from "./data/data.js";
import {posters3} from "./data/data.js";
import {posters4} from "./data/data.js";


const portada = document.querySelector('.portada');
const portada2 = document.querySelector('.portada2');
const logoContainer = document.querySelector('.title-logo-container');
const parrafoContainer = document.querySelector('.parrafo-container');
const imagenesContainer1 = document.querySelector(".imagenes-container1");
const imagenesContainer2 = document.querySelector(".imagenes-container2");
const imagenesContainer3 = document.querySelector(".imagenes-container3");
const imagenesContainer4 = document.querySelector(".imagenes-container4");



function showPosters(){
  posters1.map((e) =>{

    
    const poster1 = document.createElement("div"); 
    poster1.setAttribute('src', e.posterUrl); 
    poster1.setAttribute('class', "imagen");
    poster1.setAttribute('style', `background-image: url(${e.posterUrl})`);

    imagenesContainer1.append(poster1);

    poster1.addEventListener("click",()=>{

      const video =` <video src=${e.videoUrl} autoplay loop></video>`
      const parrafo = `<p class="parrafo">${e.Texto}</p>`
      const imgTitle=`<img class="imgTitle" src=${e.logoTitleUrl} />`
      
      
      portada.innerHTML=video;
      parrafoContainer.innerHTML=parrafo;
      logoContainer.innerHTML=imgTitle
      
    })
  });

  posters2.map((e) =>{

    
    const poster2 = document.createElement("div"); 
    poster2.setAttribute('src', e.posterUrl); 
    poster2.setAttribute('class', "imagen");
    poster2.setAttribute('style', `background-image: url(${e.posterUrl})`);

    imagenesContainer2.append(poster2)
    

    poster2.addEventListener("click",()=>{

      const video =` <video src=${e.videoUrl} autoplay loop></video>`
      const parrafo = `<p class="parrafo">${e.Texto}</p>`
      const imgTitle=`<img class="imgTitle" src=${e.logoTitleUrl} />`
      
      
      portada.innerHTML=video;
      parrafoContainer.innerHTML=parrafo;
      logoContainer.innerHTML=imgTitle
      
    })
  });

  posters3.map((e) =>{

    
    const poster3 = document.createElement("div"); 
    poster3.setAttribute('src', e.posterUrl); 
    poster3.setAttribute('class', "imagen");
    poster3.setAttribute('style', `background-image: url(${e.posterUrl})`);

    imagenesContainer3.append(poster3)
    

    poster3.addEventListener("click",()=>{

      const video =` <video src=${e.videoUrl} autoplay loop></video>`
      const parrafo = `<p class="parrafo">${e.Texto}</p>`
      const imgTitle=`<img class="imgTitle" src=${e.logoTitleUrl} />`
      
      
      portada.innerHTML=video;
      parrafoContainer.innerHTML=parrafo;
      logoContainer.innerHTML=imgTitle
      
    })
  });

  posters4.map((e) =>{

    
    const poster4 = document.createElement("div"); 
    poster4.setAttribute('src', e.posterUrl); 
    poster4.setAttribute('class', "imagen");
    poster4.setAttribute('style', `background-image: url(${e.posterUrl})`);

    imagenesContainer4.append(poster4)
    

    poster4.addEventListener("click",()=>{

      const video =` <video src=${e.videoUrl} autoplay loop></video>`
      const parrafo = `<p class="parrafo">${e.Texto}</p>`
      const imgTitle=`<img class="imgTitle" src=${e.logoTitleUrl} />`
      
      
      portada.innerHTML=video;
      parrafoContainer.innerHTML=parrafo;
      logoContainer.innerHTML=imgTitle
      
    })
  });


};

showPosters()















