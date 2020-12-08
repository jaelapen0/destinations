export const toggleRead = () => {
   if (document.getElementById("description") !== null){
   document.getElementById("description").id = "description2"
   document.getElementById("toggler").innerHTML = "READ LESS"}
   else{
      document.getElementById("description2").id = "description"
   document.getElementById("toggler").innerHTML = "READ MORE"
   }
   debugger;
}