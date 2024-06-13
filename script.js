function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/217874214_333174248364456_741342056832036867_n.jpg"
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/312566675_640507987631079_1011229287580341670_n.jpg"
    )
  }
}

