var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var active = document.querySelector(".collapsible.active");
    if (active && active !== this) {
      active.classList.remove("active");
      active.nextElementSibling.style.maxHeight = null;
    }
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

  const moveToTopBtn = document.getElementById('moveToTopBtn');
  
  // Show or hide the button based on the scroll position
  function handleScroll() {
      if (window.scrollY > 300) {
          moveToTopBtn.classList.add('visible');
      } else {
          moveToTopBtn.classList.remove('visible');
      }
  }
  
  // Scroll to the top smoothly when the button is clicked
  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
  
  // Attach the scrollToTop function to the button's click event
  moveToTopBtn.addEventListener('click', scrollToTop);
  
  // Listen to the scroll event and handle showing/hiding the button
  window.addEventListener('scroll', handleScroll);
