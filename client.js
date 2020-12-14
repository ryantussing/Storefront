cart = document.getElementById("pageBody-cart")
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
    $productContainer.style.cssText = "height: auto; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly; padding-top: 1vh; padding-bottom: 1vh; text-align: center";
    $pageBody.append($productContainer)

    data.posters.forEach(poster => {
        const $section = document.createElement("section")
        $section.style.cssText = "border: solid 1px rgb(230, 230, 255); width: 25vh; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; padding-top: 1vh; margin-top: 5px; margin-bottom: 5px; item-align: center;"

        const $img = document.createElement("img")
        $img.src = poster.imgSource; $img.alt = poster.name
        $img.style.cssText = "width:200px; height: 300px; text-align: center;"
        $section.append($img)

        const $h2 = document.createElement("h2")
        $h2.innerHTML = `<h2>${poster.name}</h2>`
        $h2.style.fontSize = "12px"
        $h2.style.textAlign = "center"
        $section.append($h2)

        const $shoppingBar = document.createElement("section")
        $shoppingBar.style.cssText = "border: solid 1px rgb(230, 230, 255); width: 25vh; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: space-evenly; width: 20vw; text-align: center;"
            const $plusSign = document.createElement("img")
            $plusSign.src = "Plus.png"
            const $minusSign = document.createElement("img")
            $minusSign.src = "Minus.png"
            $shoppingBar.append($plusSign)
            $shoppingBar.append($minusSign)
        $section.append($shoppingBar)

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
            "imgSource" : "Pictures/SpiderversePoster.jpg"
        }
    ]
    return {
        "posters" : posters
    }
}