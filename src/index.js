// src/index.js
import "./styles/index.scss";
// require("./styles/index.scss")
import {fetchPhotos, jsonFlickrFeed} from "./scripts/flickr_api.js"
import {changeVideo} from "./scripts/video"
// console.log("HI")

window.fetchPhotos = fetchPhotos;
window.jsonFlickrFeed = jsonFlickrFeed;

window.changeCity = (e) => {
   debugger;
    fetchPhotos(e.innerText)
    changeVideo(e.title)

}
// window.addEventListener("DOMContentLoaded", () => {
//    require('./scripts/flickr_api')

// })
// const fetchPhotos = (e) => {
//    // debugger;
//    let script = document.createElement('script');
//    script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${e.innerText}%20skyline`;
//    // script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&&per_page=3&tags=${document.getElementById("search").value}skyline`;
//    document.querySelector('head').appendChild(script);
// }
// const jsonFlickrFeed = data => {
//    // debugger;
//    data.items  = data.items.slice(0, 4);
//    // debugger;
//    let image = "";
//    data.items.forEach((photo) => {
//       // debugger 
//       let url = photo.media.m
//       // photo.media.m[photo.media.m.length - 5] = "c"
//       debugger
//       let finalUrl = `${ url.slice(0, url.length - 5)}c.jpg`
//       debugger;
//       image += `<img class="photo" src=\"${finalUrl}"\"/>`;
//    })
//    debugger;
//    document.getElementById("imgs").innerHTML = image;
// }

// let apiSearch = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=795df33dcdb5aefaf9b66f91ae41c70c&tags=skyline&per_page=3"

// import "./styles/index.scss"