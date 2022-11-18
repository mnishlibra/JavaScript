const containter = document.getElementById("container");
const img = document.querySelector("img");

containter.addEventListener("mouseover", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y);
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)"
});


containter.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
})