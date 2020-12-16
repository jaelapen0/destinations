import "./styles/index.scss";
import {fetchPhotos, jsonFlickrFeed, wikiAPI} from "./scripts/flickr_api.js"
import {changeVideo} from "./scripts/video"
import {toggleRead, toggleUseButton, usePhotoButton} from "./scripts/util"
// console.log("HI")
import 'regenerator-runtime/runtime'
import * as bodyPix from '@tensorflow-models/body-pix';
import Webcam from 'webcam-easy';
import {toBlob, toJpeg} from 'dom-to-image'

window.fetchPhotos = fetchPhotos;
window.jsonFlickrFeed = jsonFlickrFeed;
window.wikiAPI = wikiAPI;
window.toggleRead = toggleRead;
window.toggleUseButton = toggleRead;
window.usePhotoButton = usePhotoButton;
window.changeCity = (e) => {
   // debugger;
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
            toggleUseButton();
            document.getElementById("photobooth").removeAttribute("hidden")
            document.getElementById("webcam").id = "webcam-enabled"
            document.getElementById("postcard").removeAttribute("hidden")
            document.getElementById("converter").removeAttribute("hidden")

            e.innerText = ("STOP POST CARD BOOTH")
         })
         .catch(err => {
            alert(err);
         });

     
   }
   else{
      toggleUseButton();
      document.getElementById("photobooth").setAttribute("hidden", true)
      document.getElementById("webcam-enabled").id = "webcam"
      document.getElementById("postcard").setAttribute("hidden", true)
      document.getElementById("converter").setAttribute("hidden", true)
      e.innerText = ("START POST CARD BOOTH")
      webcam.stop()
      document.getElementById("download").setAttribute("hidden", true)
   }
} 






window.startCam = startCam;
window.snap = snap;
window.makeCapture = makeCapture;;
// window.createScreenShot = createScreenShot;
export async function makeCapture() {
   document.getElementById("converter").innerHTML = 
   `Loading <i class="fa fa-cog fa-spin" style="font-size:20px"></i>`
   const imageElement = document.getElementById('ayo2');
   const net = await bodyPix.load({
      architecture: 'ResNet50'
   });

   net.segmentPerson(webcamElement, {
      flipHorizontal: true,
      internalResolution: 'full',
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


export const drawPerson = (segmentation) => {
   const canvas = document.getElementById('canvas2');
   const canvasPerson = document.getElementById("canvas2");
   const ctxPerson = canvasPerson.getContext('2d');
 
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

   let imgObject = new Image();
   imgObject.onload = () => {
      ctxPerson.clearRect(0, 0, canvasPerson.width, canvasPerson.height);
      ctxPerson.imageSmoothingEnabled = true;
      ctxPerson.drawImage(imgObject, 0, 0, canvasPerson.width, canvasPerson.height);
   }
   imgObject.src = canvas.toDataURL();
   document.getElementById("download").removeAttribute("hidden")
}


export const snap = () => {

   let picture = webcam.snap();
   //  document.querySelector('#canvas').href = picture;
   debugger
   let img = document.querySelector('#canvas').toDataURL("image/png")
   document.getElementById("ayo").innerHTML = '<img id="ayo2" src="' + img + '"/>';
   document.querySelector('#canvas').remove()
}

// window.saveAs  = saveAs;
// window.toBlob = toBlob;


const takeScreenShot = () => {
   toJpeg(document.getElementById('ayo'), { quality: 0.95 })
      .then(function (dataUrl) {
         var link = document.createElement('a');
         link.download = 'my-postcard';
         link.href = dataUrl;
         link.click();
        
      });
}



//
window.takeScreenShot = takeScreenShot;