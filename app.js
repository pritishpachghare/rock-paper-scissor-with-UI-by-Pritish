let btn = document.querySelector(".play")
let images = document.querySelector(".images")
images.style.display = "none"

btn.addEventListener("click", function () {
    let images = document.querySelector(".images")
    if (images.style.display == "none") {
        images.style.display = "block"
    }
    else {
        images.style.display = "none"
    }


})

const emoji = {
    second: '📰',
    first: '1'
}

let userInput = "null";
let paper = document.querySelector(".paper");
let abc = document.querySelector(".abc")

abc.addEventListener("click", function () {
    let first = document.querySelector(".f")
    first.innerHTML = abc

})