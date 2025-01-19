let accordion = document.getElementsByClassName("accordion")
// let bottomBox = document.getElementsByClassName("bottom")

// console.log(accordion)
// console.log(bottomBox)

for (let i = 0; i < accordion.length; i++) {
    const e = accordion[i];
    e.addEventListener("click", ()=> {
        console.log("Clicked")
        e.classList.toggle("active")

        let bottomBox = e.lastElementChild
        let accImg = e.firstElementChild.lastElementChild
        // console.log(e.firstElementChild.lastElementChild)

        if (bottomBox.style.display === "block") {
            bottomBox.style.display = "none"
            accImg.src = ("./assets/images/icon-plus.svg")
        } else {
            bottomBox.style.display = "block"
            accImg.src = ("./assets/images/icon-minus.svg")
        }
    })
    
}