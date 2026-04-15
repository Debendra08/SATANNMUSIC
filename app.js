window.addEventListener("mousemove", (e) => {
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");
  
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  
  outline.style.left = e.clientX + "px";
  outline.style.top = e.clientY + "px";
});


 src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// Automatically close the mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('navContent');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
  
  navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.hide() });
  });