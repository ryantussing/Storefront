cart = document.getElementById("pageBody")
downArrow = document.getElementById("down-arrow-img")
$shoppingCartIcon = document.querySelector("img#shoppingCartImg")

downArrow.onclick = onClickDownArrow
$shoppingCartIcon = onClickDownArrow
function onClickDownArrow () {
    const $cartSection = document.createElement("section")
    $cartSection.style.border = "1px solid black"
    $cartSection.style.backgroundColor = "rgb(240, 240, 240)"
    cart.append($cartSection)
}

const data = loadData()
addProducts()
function addProducts() {
    const $pageBody = document.querySelector("div#pageBody")

    const $productContainer = document.createElement("div")
    $productContainer.style.cssText = "height: auto; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly; padding-top: 1vh; padding-bottom: 1vh";
    $pageBody.append($productContainer)

    data.posters.forEach(poster => {
        const $section = document.createElement("section")
        $section.style.cssText = "border: solid 1px rgb(230, 230, 255); width: 25vh; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: space-evenly; padding-top: 1vh";

        const $img = document.createElement("img")
        $img.innerHTML = `<img src="${poster.imgSource}" alt="${poster.name}">`
        $img.style.border = "1px solid black"
        $section.append($img)

        const $h2 = document.createElement("h2")
        $h2.innerHTML = `<h2>${poster.name}</h2>`
        $h2.style.fontSize = "12px"
        $h2.style.textAlign = "center"
        $section.append($h2)

        $productContainer.append($section)
    })
}

function loadData() {

    const posters = 
    [
        {
            "name" : "Avengers Poster",
            "imgSource" : "Pictures/AvengersPoster.jpg"
        },

        {
            "name" : "Baby Driver Poster",
            "imgSource" : "Pictures/BabyDriverPoster.jpg"
        },

        {
            "name" : "Inception Poster",
            "imgSource" : "Pictures/InceptionPoster.jpg"
        },

        {
            "name" : "Mariokart Poster",
            "imgSource" : "Pictures/MariokartPoster.jpg"
        },

        {
            "name" : "Post Malone Poster",
            "imgSource" : "Pictures/PostMalonePoster.jpg"
        },

        {
            "name" : "Spiderverse Poster",
            "imgSource" : "Pictures/AvengersPoster.jpg"
        }
    ]
    return {
        "posters" : posters
    }
}