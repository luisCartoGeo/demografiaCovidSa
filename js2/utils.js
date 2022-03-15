/*ocultar - mostrar divs*/

function botonDemo() {
   var x= document.getElementById("map")
   var po= document.getElementById("po-pib")
   var poy= document.getElementById("poy")
   var idh= document.getElementById("idh")
   if (x.style.height == '95vh') {
         x.style.height ='70vh';
         po.style.display ="block";
         poy.style.display ="block";
         idh.style.display ="block";
      } else {
         x.style.height = '95vh';
         po.style.display ="none";
         poy.style.display ="none";
         idh.style.display ="none";
      }
}
function botonCovid() {
   var x= document.getElementById("map")
   var caco= document.getElementById("ca_covid")
   var mco=document.getElementById("d_covid")
   if (x.style.width == '100%') {
         x.style.width ='55vw';
         caco.style.display ="block";
         mco.style.display ="block";
      } else {
         x.style.width = '100%'
         caco.style.display ="none";
         mco.style.display ="none";
      }
}