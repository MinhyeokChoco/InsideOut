const snack = document.querySelector("#snack")
const recipe = document.querySelector("#recipe")
const info = document.querySelector("#info")


snack.addEventListener("click", () => {
  location.href = "http://localhost:5501/frontend/html/whiskytip.snack.html"
})


recipe.addEventListener("click", () => {
  location.href = "http://localhost:5501/frontend/html/whiskytip.recipe.html"
})

info.addEventListener("click", () => [
  location.href = "http://localhost:5501/frontend/html/whiskytip.info.html"
])