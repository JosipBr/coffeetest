
window.addEventListener("scroll", function(){
  var nav =this.document.getElementById("navbar");
  nav.classList.toggle("sticky",window.scrollY > 0);

})