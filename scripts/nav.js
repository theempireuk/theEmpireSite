function navSelect() {
  var navLinks = document.getElementsByClassName("nav-link")
  navLinks[0].classList.remove("active")
  navLinks[1].classList.remove("active")
  navLinks[2].classList.remove("active")
  event.target.classList.add("active")
}
