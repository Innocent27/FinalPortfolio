function toggleNav() {
    document.getElementById("nav-links").classList.toggle("active");
  }
  
  function scrollToSection(elementID) {
    toggleNav();
    document.getElementById(elementID).scrollIntoView();
  }