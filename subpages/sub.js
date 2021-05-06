AOS.init();
document.getElementById("aToHome").addEventListener("mouseover", (e) => {
    e.target.style.transform = "translateX(75px)";
    e.target.textContent = "fe-li.github.io";
    e.target.addEventListener("mouseout", (el) => {
        e.target.style.transform = "translateX(0px)";
        e.target.textContent = "Kamil.";
    })
})