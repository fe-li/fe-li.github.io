AOS.init();

let odnosniki = document.querySelectorAll(".toSubPages");

odnosniki.forEach((e) => {
    e.addEventListener("mouseover", (element) => {
        if (e.textContent == "Hello!") {
            element.target.textContent = "About me";
            e.addEventListener("mouseout", (el) => {
                e.textContent = "Hello!"
            })
        } else if (e.textContent == "I am") {
            element.target.textContent = "projects";
            e.addEventListener("mouseout", (el) => {
                e.textContent = "I am"
            })
        } else if (e.textContent == "Kamil") {
            element.target.textContent = "contact";
            e.addEventListener("mouseout", (el) => {
                e.textContent = "Kamil"
            })
        }
    })
});

document.getElementById("aToHome").addEventListener("mouseover", (e) => {
    e.target.style.transform = "translateX(75px)";
    e.target.textContent = "fe-li.github.io";
    e.target.addEventListener("mouseout", (el) => {
        e.target.style.transform = "translateX(0px)";
        e.target.textContent = "Kamil.";
    })
})