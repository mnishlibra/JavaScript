const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
let index = 0 ; 
function run() {
    index++;
    if(index > img.length - 1) {
        index = 0 ; 
    }
    imgs.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(run, 2000);

window.addEventListener('load', () => {
    console.log('DOM content is Loaded')
})

document.addEventListener('click', (e) => {
    if(e.target.className == 'cart-btn'){
        showNotification()
    }
})


function showNotification() {
        const notification = document.createElement("div");
        notification.classList.add('toast');
        notification.innerText = "New Product is Added to The cart";
        container.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        },1500)
    }