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

window.onload = () => {
   fetchPhotos("New York")
   changeVideo("5V23-xQknDw")
};