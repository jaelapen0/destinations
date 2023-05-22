// constcorsAttr = new EnableCorsAttribute("*", "*", "*");
 import {usePhotoButton} from "./util"
 export const fetchPhotos = (cityName) => {
   // debugger;
   let script = document.createElement('script');
   script.id="wikiAPI"
    script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${cityName}%20skyline&tagmode=all`;
   // script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&&per_page=3&tags=${document.getElementById("search").value}skyline`;
   document.querySelector('head').appendChild(script);
}
 export const jsonFlickrFeed = data => {
   // debugger;
    if (data.title.includes("boston"))
       data.items = data.items.slice(6, 15);
   if (data.title.includes("chicago"))
      data.items = data.items.slice(8, 13);
   if (data.title.includes("dallas"))
   data.items = data.items.slice(8, 16);
   if (data.title.includes("denver"))
   data.items = data.items.slice(13, 20);
   if (data.title.includes("detroit"))
   data.items = data.items.slice(10, 20);
   if(data.title.includes("houston"))
   data.items = data.items.slice(1, 8);
   if (data.title.includes("honolulu"))
      data.items = data.items.slice(4, 16);
   if (data.title.includes("angeles"))
      data.items = data.items.slice(11, 20);
    if (data.title.includes("york"))
       data.items = data.items.slice(10, 17)
   if (data.title.includes("orlando"))
      data.items = data.items.slice(15, 20);
   if (data.title.includes("phoenix"))
      data.items = data.items.slice(7, 16);
   if (data.title.includes("seattle"))
      data.items = data.items.slice(12, 20);
   if (data.title.includes("toronto"))
      data.items = data.items.slice(11, 17);
   // debugger;
//

   let image = "<h3>FLICKR FEED</h3>";
   data.items.forEach((photo) => {
      // debugger 
      let url = photo.media.m
      let finalUrl = `${url.slice(0, url.length - 5)}b.jpg`
      // debugger;
      image +=
               `<div class="photo-container"> 
                      <a href = ${ finalUrl } target = "_blank"> 
                        <img class="photo" src=\"${finalUrl}"\"/>  
                     </a>
                     <div class="photo-button"> </div>
               </div>`
      
   })
   // debugger;
   document.getElementById("imgs").innerHTML = image;
    if (document.getElementById("photobooth").hidden)
    Array.from(document.getElementsByClassName("photo-button")).forEach(ele => {
      ele.setAttribute("hidden",true)

    })
    else{
       Array.from(document.getElementsByClassName("photo-button")).forEach(ele => {
          ele.onclick = () => usePhotoButton(ele)
          ele.innerHTML = "USE"
       })
    }
}


export const wikiAPI = location => {
   // debugger
   let loc = location.replace(" ", "_").toLowerCase()
   let script = document.createElement('script');
   if (location.toLowerCase() === "new york")
   {script.src = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=nyc`}
   else if (location.toLowerCase() === "phoenix")
   { script.src = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Phoenix,_Arizona` }
   else 
   { script.src = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${loc}` }
   // debugger;
   return $.ajax({
       url: script.src, dataType: "jsonp",
   }).then(data => {
      // debugger;

     if (document.getElementById("description") !== null){
      //   debugger
         document.getElementById("description").innerHTML = Object.values(data.query.pages)[0].extract
     }
     else if (document.getElementById("description2") !== null){
         document.getElementById("description2").innerHTML =Object.values(data.query.pages)[0].extract
         // debugger;
      }
   })
}

