var apps = [
  {
    name: "Hytch",
    description: "Find, share and decide upon dates in London by region.",
    brief: "Make a simple, pretty and mobile-optimised frontend app for the clients customers. Also, make an intuitive backend CMS and for the client to add dates and track date metrics.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    testimonial: "Good squad",
    href: "https://www.hytch.com",
    imgSrc: "assets/satellite.png"
  },
  {
    name: "Cognitant",
    description: "Find, share and decide upon dates in London by region.",
    brief: "Make a simple, pretty and mobile-optimised frontend app for the clients customers. Also, make an intuitive backend CMS and for the client to add dates and track date metrics.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    testimonial: "Good squad",
    href: "https://www.hytch.com",
    imgSrc: "assets/satellite.png"
  },
  {
    name: "Dubzoo",
    description: "Find, share and decide upon dates in London by region.",
    brief: "Make a simple, pretty and mobile-optimised frontend app for the clients customers. Also, make an intuitive backend CMS and for the client to add dates and track date metrics.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    testimonial: "Good squad",
    href: "https://www.hytch.com",
    imgSrc: "assets/satellite.png"
  }
]

var selectedApp = 0
var app = document.getElementById('app')
var appImg = document.getElementById('app-img')
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
  appImg.src = apps[selectedApp].imgSrc
  appName.textContent = apps[selectedApp].name
  appDesc.textContent = apps[selectedApp].description
  appBrief.textContent = apps[selectedApp].brief
  appBuiltWith.textContent = apps[selectedApp].builtWith
  appTestimonial.textContent = apps[selectedApp].testimonial
  appLink.href = apps[selectedApp].href
}

displayApp()
