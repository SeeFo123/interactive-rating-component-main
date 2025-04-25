let btn = document.querySelector("button");
let options = document.querySelectorAll(".number");
let container = document.querySelector(".container");
let check = false;
let number = document.querySelector(".user-rate span");

options.forEach(e => {
    e.addEventListener("click", function () {
        options.forEach(element => {
            element.classList.remove("active");
        });
        e.classList.add("active");
        check = true;
        number.innerHTML = e.getAttribute("n");
    })
});

btn.onclick = function () {
    if (check) {
        container.classList.add("done");
    }
}