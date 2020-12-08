// src/index.js
import "./styles/index.scss";
// require("./styles/index.scss")
import {fetchPhotos, jsonFlickrFeed, wikiAPI} from "./scripts/flickr_api.js"
import {changeVideo} from "./scripts/video"
import {toggleRead} from "./scripts/util"
// console.log("HI")

window.fetchPhotos = fetchPhotos;
window.jsonFlickrFeed = jsonFlickrFeed;
window.wikiAPI = wikiAPI;
window.toggleRead = toggleRead;

window.changeCity = (e) => {
   debugger;
    fetchPhotos(e.innerText)
    wikiAPI(e.innerText)
    changeVideo(e.title)


}

window.onload = () => {
   fetchPhotos("New York")
   wikiAPI("New York")
   changeVideo("5V23-xQknDw")
};