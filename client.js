cart = document.getElementById("pageBody-cartDiv")
$downArrow = document.getElementById("down-arrow-img")
$shoppingCartIcon = document.getElementById("shoppingCartImg")
var clicks = 2

$downArrow.onclick = onArrow
$shoppingCartIcon.onclick = onArrow
function onArrow() {

    if ( (clicks%2) == 0) {
        const $userCart = document.createElement("section")
        $userCart.id = "userCart"
        $userCart.style.border = "1px solid rgb(230, 230, 255)"
        $userCart.style.backgroundColor = "rgb(240, 240, 240)"
        $downArrow.src = "Pictures/UpArrow.png"
        cart.append($userCart)
        clicks++
    }
    else if ( (clicks%2) == 1) {
        $userCart = document.querySelector("section#userCart")
        $downArrow.src = "Pictures/DownArrow.png"
        cart.removeChild($userCart)
        clicks++
    }

}

const data = loadData()
addProducts()
function addProducts() {
    const $pageBody = document.querySelector("div#pageBody")

    const $productContainer = document.createElement("div")
    $productContainer.style.cssText = "height: auto; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly; padding-top: 1vh; padding-bottom: 1vh; text-align: center";
    $pageBody.append($productContainer)

    data.posters.forEach( (poster, index) => {
        const $section = document.createElement("section")
        $section.style.cssText = "text-align: center; border: solid 1px rgb(230, 230, 255); width: 25vw; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; padding-top: 1vh; padding-bottom: 1vh; margin-top: 5px; margin-bottom: 5px;"

        const $img = document.createElement("img")
        $img.src = poster.imgSource; $img.alt = poster.name
        $img.style.cssText = "width:12vh; height: 18vh; text-align: center; border: 1px solid black;"
        $section.append($img)

        const $h2 = document.createElement("h2")
        $h2.innerHTML = `<h2>${poster.name}</h2>`
        $h2.style.fontSize = "12px"
        $h2.style.textAlign = "center"
        $section.append($h2)

        const $shoppingBar = document.createElement("section")
        $shoppingBar.style.cssText = "border: solid 1px rgb(230, 230, 255); width: 20vw; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between; width: 20vw; text-align: center; padding: 1px;"
            // const $minus = document.createElement("img")
            //     $minus.setAttribute("data-name", poster.name)
            //     $minus.src = "Pictures/Minus.png"
            //     $minus.id = poster.name
            //     $minus.style.cssText = "width: 20px; height: 20px;"
            //     $minus.onclick = removeFromCart
            // $shoppingBar.append($minus)
            const $shoppingBarText = document.createElement("h3")
                $shoppingBarText.innerHTML = `Q U A N T I T Y`
                $shoppingBarText.style.cssText = "font-size: 12px;"
            $shoppingBar.append($shoppingBarText)
            const $plus = document.createElement("img")
                $plus.setAttribute("data-name", poster.name)
                $plus.onclick = addToCart
                $plus.src = "Pictures/Plus.png"
                $plus.id = poster.name
                $plus.style.cssText = "width: 20px; height: 20px; line-height: 0;"
            $shoppingBar.append($plus)
        $section.append($shoppingBar)

        $productContainer.append($section)
    })
}

function addToCart(event) {
    var name = event.target.getAttribute("data-name")
    const $userCart = document.querySelector("section#userCart")
    const $item = document.createElement("h3")
    $item.style.cssText = "font-size: 12px; padding: 2px;"
    $item.id = name
    $item.innerHTML = `${name}`
    $userCart.append($item)
}

// function removeFromCart(event) {
//     var name = event.target.getAttribute("data-name")
//     const $userCart = document.querySelector("section#userCart")
//     const $item = document.querySelector("h3#"+name+"id")
//     $userCart.removeChild($item)
// }

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
            "name" : "Pokemon Poster",
            "imgSource" : "Pictures/PokemonPoster.jpg"
        },

        {
            "name" : "Spiderverse Poster",
            "imgSource" : "Pictures/SpiderversePoster.jpg"
        },

        {
            "name" : "Die Hard Poster",
            "imgSource" : "Pictures/DieHardPoster.jpg"
        },

        {
            "name" : "Toy Story Poster",
            "imgSource" : "Pictures/ToyStoryPoster.jpg"
        },

        {
            "name" : "Guardians Poster",
            "imgSource" : "Pictures/GOTGPoster.jpg"
        },

        {
            "name" : "Khalid Poster",
            "imgSource" : "Pictures/KhalidPoster.jpg"
        },

        {
            "name" : "Fortnite Poster",
            "imgSource" : "Pictures/FortnitePoster.jpg"
        },

        {
            "name" : "Cyberpunk 2077 Poster",
            "imgSource" : "Pictures/CyberpunkPoster.jpg"
        },

        {
            "name" : "Home Alone Poster",
            "imgSource" : "Pictures/HomeAlonePoster.jpg"
        },

        {
            "name" : "The Last Of Us Poster",
            "imgSource" : "Pictures/TLOUPoster.jpg"
        }
    ]
    return {
        "posters" : posters
    }
}