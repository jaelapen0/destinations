

export const toggleRead = () => {
   if (document.getElementById("description") !== null){
   document.getElementById("description").id = "description2"
   document.getElementById("toggler").innerHTML = "READ LESS"}
   else{
      document.getElementById("description2").id = "description"
   document.getElementById("toggler").innerHTML = "READ MORE"
   }
   // debugger;
}


export const toggleUseButton = () => {
   let booth = document.getElementById("photobooth")
   // debugger;
   if (booth.hidden === true){
      // debugger;
      document.getElementsByClassName("photo-button").forEach(ele => {
         // debugger;
         ele.removeAttribute("hidden")
          ele.innerHTML = "USE"
         // ele.setAttribute("onclick", function clickkity(){document.getElementById("ayo").style.backgroundImage = ele.previousElementSibling.href});
         ele.onclick= ()=> usePhotoButton(ele)
         // ele.onclick= function() { document.getElementById("ayo").style.backgroundImage = ele.previousElementSibling.href };

      })  
   }

   // onclick = { usePhotoButton(this) }  hidden
   else{
      document.getElementsByClassName("photo-button").forEach(ele => {
         ele.setAttribute("hidden","true")
         ele.innerHTML = ""
      })
   }

}

export const usePhotoButton = (e) => {

   // debugger;
// e.setAttribute("onclick", function clickkity(){
   document.getElementById("ayo").style.backgroundImage = `url(${e.previousElementSibling.href}`
   //  document.getElementById("ayo").style.backgroundImage = "https://live.staticflickr.com/65535/50556102128_f37bce0514_b.jpg"
}