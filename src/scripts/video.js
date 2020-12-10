
export const changeVideo = url => {
    // src="https://www.youtube.com/embed/c2_u8UqG2c4" 
   let vid = 
   `<iframe 
      width="736" height="414" 
      src="https://www.youtube.com/embed/${url}"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
   </iframe>`
   debugger
   document.getElementById("vid").innerHTML = vid;
}