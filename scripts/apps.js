var apps = [
  {
    name: "Dubzoo",
    description: "Social analytics tool for creatives, managers and agencies.",
    brief: "Build a platform for users to track and manage their own/clients social accounts in one place.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    testimonial: "\"The team not only built what we asked them to but provided us with invaluable technical insights that allowed us to improve our product together. On top of that they employed best practises for hosting and security meaning that our app is scalable and quick while being data intensive.\"",
    href: "https://dubzoo.netlify.com",
    imgSrc: "assets/Dubzoo.gif"
  },
  {
    name: "Cognitant",
    description: "Professional business app showcasing mission, products, team and inviting connections.",
    brief: "Create a sophisticated, public-facing business app for a medical tech company.",
    builtWith: "HTML, CSS, JS.",
    testimonial: "\"We needed this turned around quickly for our upcoming events. The team went above and beyond to take our ideas and design snippets and rapidly build our new site. Will be working together again soon!\"",
    href: "https://www.cognitant.com",
    imgSrc: "assets/Cognitant.gif"
  }
]

var selectedApp = 0
var app = document.getElementById('app')
var appPreview = document.getElementById('app-preview')
var appName = document.getElementById('app-name')
var appDesc = document.getElementById('app-desc')
var appBrief = document.getElementById('app-brief')
var appBuiltWith = document.getElementById('app-built-with')
var appTestimonial = document.getElementById('app-testimonial')
var appLink = document.getElementById('app-link')

nextApp = () => {
  if (selectedApp !== apps.length-1) {
    app.style.opacity = "0"
    app.style.transform = "translateY(300px)"
    setTimeout( function() {
      selectedApp += 1
      displayApp()
      app.style.opacity = "1"
      app.style.transform = "translateY(0px)"
    }, 250)
  }
}

previousApp = () => {
  if (selectedApp !== 0) {
    app.style.opacity = "0"
    app.style.transform = "translateY(300px)"
    setTimeout( function() {
      selectedApp -= 1
      displayApp()
      app.style.opacity = "1"
      app.style.transform = "translateY(0px)"
    }, 250)
  }
}

highlight = () => {
  event.target.style.color = "#777"
}

unhighlight = () => {
  event.target.style.color = "white"
}

displayApp = () => {
  appPreview.src = apps[selectedApp].imgSrc
  appName.textContent = apps[selectedApp].name
  appDesc.textContent = apps[selectedApp].description
  appBrief.textContent = apps[selectedApp].brief
  appBuiltWith.textContent = apps[selectedApp].builtWith
  appTestimonial.textContent = apps[selectedApp].testimonial
  appLink.href = apps[selectedApp].href
}

displayApp()
