// constcorsAttr = new EnableCorsAttribute("*", "*", "*");
 
 export const fetchPhotos = (cityName) => {
   // debugger;
   let script = document.createElement('script');
   script.id="wikiAPI"
    script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${cityName}%20skyline&tagmode=all`;
   // script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&&per_page=3&tags=${document.getElementById("search").value}skyline`;
   document.querySelector('head').appendChild(script);
}
 export const jsonFlickrFeed = data => {
   debugger;
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

   let image = "<h3>FLICKR FEED</h3>";
   data.items.forEach((photo) => {
      // debugger 
      let url = photo.media.m
      let finalUrl = `${url.slice(0, url.length - 5)}b.jpg`
      image += `<a href=${finalUrl}> <div class="photo-container"> <img class="photo" src=\"${finalUrl}"\"/>  </div> </a>` ;
   })
   // debugger;
   document.getElementById("imgs").innerHTML = image;
}


export const wikiAPI = location => {
   let loc = location.replace(" ", "_").toLowerCase()
   let script = document.createElement('script');
   
   if (location.toLowerCase() === "new york")
   {script.src = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=nyc`}
   else if (location.toLowerCase() === "phoenix")
   { script.src = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Phoenix,_Arizona` }
   else 
   { script.src = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${loc}` }

   return $.ajax({
       url: script.src, dataType: "jsonp",
      }).then(data => {
      document.getElementById("description").innerHTML = Object.values(data.query.pages)[0].extract
   })
}