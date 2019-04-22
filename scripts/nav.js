function toggleActive() {
  var hamburgers = document.getElementsByClassName("hamburger")
  var navMenu = document.getElementById("nav-menu")
  hamburgers[0].classList.toggle("is-active")
  navMenu.classList.toggle("hide")
}

function navClick(selection) {
  var landingIcon = document.getElementById('nav-icon-landing')
  var processIcon = document.getElementById('nav-icon-process')
  var appsIcon = document.getElementById('nav-icon-apps')
  var contactIcon = document.getElementById('nav-icon-contact')

  landingIcon.classList.remove('selected')
  processIcon.classList.remove('selected')
  appsIcon.classList.remove('selected')
  contactIcon.classList.remove('selected')

  if (selection === 'landing') landingIcon.classList.add('selected')
  if (selection === 'process') processIcon.classList.add('selected')
  if (selection === 'apps') appsIcon.classList.add('selected')
  if (selection === 'contact') contactIcon.classList.add('selected')

  console.log(landingIcon, processIcon, appsIcon, contactIcon)
}
