import "./styles/index.scss";
import {fetchPhotos, jsonFlickrFeed, wikiAPI} from "./scripts/flickr_api.js"
import {changeVideo} from "./scripts/video"
import {toggleRead, toggleUseButton, usePhotoButton} from "./scripts/util"
// console.log("HI")
import 'regenerator-runtime/runtime'
import * as bodyPix from '@tensorflow-models/body-pix';
import Webcam from 'webcam-easy';


window.fetchPhotos = fetchPhotos;
window.jsonFlickrFeed = jsonFlickrFeed;
window.wikiAPI = wikiAPI;
window.toggleRead = toggleRead;
window.toggleUseButton = toggleRead;
window.usePhotoButton = usePhotoButton;
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

      
      
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

export const startCam = (e)=> {
   debugger;
   // document.getElementById("photobooth").id = "photobooth-enabled";
   if (e.innerText.includes("START")){
   
      webcam.start()
         .then(result => {
            console.log("webcam started");
         })
         .catch(err => {
            alert(err);
         });

      toggleUseButton();
      document.getElementById("photobooth").removeAttribute("hidden")
      document.getElementById("webcam").id = "webcam-enabled"
      document.getElementById("postcard").removeAttribute("hidden")
      document.getElementById("converter").removeAttribute("hidden")

      e.innerText = ("STOP POST CARD BOOTH")
   }
   else{
      toggleUseButton();
      document.getElementById("photobooth").setAttribute("hidden", true)
      document.getElementById("webcam-enabled").id = "webcam"
      document.getElementById("postcard").setAttribute("hidden", true)
      document.getElementById("converter").setAttribute("hidden", true)
      e.innerText = ("START POST CARD BOOTH")
      webcam.stop()
   }
} 




window.startCam = startCam;
window.snap = snap;
window.makeCapture = makeCapture;;

async function makeCapture() {
   document.getElementById("converter").innerHTML = 
   `Loading <i class="fa fa-cog fa-spin" style="font-size:20px"></i>`
   const imageElement = document.getElementById('ayo2');
   const net = await bodyPix.load({
      architecture: 'ResNet50'
   });

   net.segmentPerson(webcamElement, {
      flipHorizontal: true,
      internalResolution: 'medium',
      segmentationThreshold: 0.7
   })
      .then(personSegmentation => {
         if (personSegmentation != null) {
            document.getElementById("converter").innerHTML =
            `CAPTURE Postcard`
            drawPerson(personSegmentation);
         }
      });

}


const drawPerson = (segmentation) => {
   const canvas = document.getElementById('canvas2');
   const canvasPerson = document.getElementById("canvas2");
   const contextPerson = canvasPerson.getContext('2d');
 
   canvas.width = 640;
      canvas.height = 480;
      let ctx = canvas.getContext('2d');
      ctx.drawImage(webcamElement, 0, 0);
      let imageData = ctx.getImageData(0, 0, webcamElement.width, webcamElement.height);

      let pixel = imageData.data;
      for (let p = 0; p < pixel.length; p += 4) {
         if (segmentation.data[p / 4] == 0) {
            pixel[p + 3] = 0;
         }
      }
      ctx.imageSmoothingEnabled = true;
      ctx.putImageData(imageData, 0, 0);

      let imageObject = new Image();
      imageObject.onload = function () {
         contextPerson.clearRect(0, 0, canvasPerson.width, canvasPerson.height);
         contextPerson.imageSmoothingEnabled = true;
         contextPerson.drawImage(imageObject, 0, 0, canvasPerson.width, canvasPerson.height);
      }
      imageObject.src = canvas.toDataURL();

}


export const snap = () => {

   let picture = webcam.snap();
   //  document.querySelector('#canvas').href = picture;
   debugger
   let img = document.querySelector('#canvas').toDataURL("image/png")
   document.getElementById("ayo").innerHTML = '<img id="ayo2" src="' + img + '"/>';
   document.querySelector('#canvas').remove()
}
