// src/index.js
import "./styles/index.scss";
// require("./styles/index.scss")
import {fetchPhotos, jsonFlickrFeed, wikiAPI} from "./scripts/flickr_api.js"
import {changeVideo} from "./scripts/video"
import {toggleRead} from "./scripts/util"
// console.log("HI")
import 'regenerator-runtime/runtime'
import * as bodyPix from '@tensorflow-models/body-pix';
import Webcam from 'webcam-easy';


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

async function webweb() {
   const imageElement = document.getElementById('ayo2');

   const net = await bodyPix.load({
      architecture: 'ResNet50'
   });
   const segmentation = await net.segmentPerson(imageElement,{
      flipHorizontal: false,
      internalResolution: 'medium',
      segmentationThreshold: 0.5
   });
   // net.segmentPerson(webcamElement, {
   //    flipHorizontal: true,
   //    internalResolution: 'medium',
   //    segmentationThreshold: 0.5
   // })
   //    .then(personSegmentation => {
   //       if (personSegmentation != null) {
   //          drawBody(personSegmentation);
   //       }
   //    });
   // const canvasPerson = document.getElementById("canvas2");
   // let contextPerson = canvasPerson.getContext('2d');
   // const image = document.getElementById('ayo2');
   // function drawBody(personSegmentation) {
   //    contextPerson.drawImage(image, 0, 0, 640, 480);
   //    let imageData = contextPerson.getImageData(0, 0, 640, 480);
   //    debugger;
   //    let pixel = imageData.data;
   //    for (let p = 0; p < pixel.length; p += 4) {
   //       if (personSegmentation.data[p / 4] == 0) {
   //          pixel[p + 3] = 0;
   //       }
   //    }
   //    contextPerson.imageSmoothingEnabled = true;
   //    contextPerson.putImageData(imageData, 0, 0);
   // }


   const maskBackground = true;
   // Convert the personSegmentation into a mask to darken the background.
   const backgroundDarkeningMask = bodyPix.toMask(segmentation, maskBackground);

   const opacity = 1;
   const maskBlurAmount = 0;

   const canvas = document.getElementById('canvas2');
   // draw the mask onto the image on a canvas.  With opacity set to 0.7 this will darken the background.
   debugger;
   bodyPix.drawMask(
      canvas, imageElement, backgroundDarkeningMask, opacity, maskBlurAmount);
   document.getElementById("ayo").remove()
      
}

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);


webcam.start()
   .then(result => {
      console.log("webcam started");
   })
   .catch(err => {
      console.log(err);
   });

 const snap = () =>{ 

    let picture = webcam.snap();
   //  document.querySelector('#canvas').href = picture;
    debugger
    let img= document.querySelector('#canvas').toDataURL("image/png")
    document.getElementById("ayo").innerHTML = '<img id="ayo2" src="' + img + '"/>';
    document.querySelector('#canvas').remove()
 }

 window.snap = snap;


window.webweb = webweb;;