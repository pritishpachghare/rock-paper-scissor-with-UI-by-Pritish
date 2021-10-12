let btn = document.querySelector(".play")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let win = document.querySelector(".win")
let image = document.querySelector(".image")
let yourScore = document.querySelector(".ss")
let compScore = document.querySelector(".sp")




const emoji = {
    first: '📰',
    second: '💎',
    third: '✂️'
}

let status = true;




image.style.display = "none"
// on play button display hidden images
btn.addEventListener("click", function () {

    btn.innerHTML = "Reset"

    if (image.style.display == "none") {
        image.style.display = "block"
    }
    else {

        btn.innerHTML = "play"
        location.reload();
    }




});


// you select the images
let you = document.querySelector(".first");
let comp = document.querySelector(".second");


let ys = 0;
let cs = 0;


paper.addEventListener('click', function () {
    you.innerHTML = emoji.first;
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer == 1) {
        comp.innerHTML = emoji.first;
        win.textContent = "Tie!!!!!!!"
    }
    else if (computer == 2) {
        comp.innerHTML = emoji.second;
        ys = ys + 5
        yourScore.innerHTML = `${ys}`;
        win.textContent = "You Win"
    }
    if (computer == 3) {
        comp.innerHTML = emoji.third;
        cs = cs + 5
        compScore.innerHTML = `${cs}`
        win.textContent = "Computer Win"
    }
    if (ys >= 50) {
        image.style.display = "none"
        win.innerHTML = "You Win!!!!!! Please reset the game";

    }
    else if (cs >= 50) {
        image.style.display = "none"
        win.innerHTML = "Computer Win!!!! Please reset the game";
    }

});

rock.addEventListener('click', function () {
    you.innerHTML = emoji.second;
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer == 1) {

        comp.innerHTML = emoji.first;
        win.textContent = "Computer Win"
        cs = cs + 5
        compScore.innerHTML = `${cs}`

    }
    else if (computer == 2) {

        comp.innerHTML = emoji.second;
        win.textContent = "Tie!!!!!"
    }
    if (computer == 3) {
        comp.innerHTML = emoji.third;
        win.textContent = "You Win";
        ys = ys + 5
        yourScore.innerHTML = `${ys}`;
    }


});

scissor.addEventListener('click', function () {
    you.innerHTML = emoji.third;
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer == 1) {
        comp.innerHTML = emoji.first;
        win.textContent = "You Win";
        ys = ys + 5
        yourScore.innerHTML = `${ys}`;
    }
    else if (computer == 2) {
        comp.innerHTML = emoji.second;
        win.textContent = "Computer Win"
        cs = cs + 5
        compScore.innerHTML = `${cs}`
    }
    if (computer == 3) {
        comp.innerHTML = emoji.third;
        win.textContent = "Tie!!!!!!"
    }





});