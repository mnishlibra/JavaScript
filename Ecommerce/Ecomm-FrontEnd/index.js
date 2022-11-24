const cart_items = document.querySelector('#cart .cart-items');
const parentNode = document.getElementById('music-content');
const parentNodeForOrders = document.getElementById('order-content');
const cart_number = document.getElementsByClassName('cart-number');
const pagination = document.getElementById('pagination');
const API_Backend = "http://localhost:3000"; 

window.addEventListener('load', () => {
    const page = 1; 
    axios
    .get(`${API_Backend}/products?page=${page}`)
    .then(({data : {products , ...pagedata}}) => {
        listProducts(products);
        showPagination(pagedata);
    })
    .catch((err) => {
        console.log(err);
    })

    axios
    .get(`${API_Backend}/orders`)
    .then((orders) => {
        listOrderProducts(orders.data);
    })
    .catch((err) => {
        console.log(err);
    })

})

document.addEventListener('click',(e)=>{

    if (e.target.className=='shop-item-button'){
        const prodId = Number(e.target.parentNode.parentNode.id.split('-')[1]);
        axios.get('http://localhost:3000/cart').then(carProducts => {
            showProductsInCart(carProducts.data);
            cart_number[0].innerHTML = 0 ;
        }) 
        axios.post('http://localhost:3000/cart', { productId: prodId}).then(data => {
            if(data.data.error){
                throw new Error('Unable to add product');
            }
            showNotification(data.data.message, false);
        })
        .catch(err => {
            console.log(err);
            showNotification(err, true);
        });

    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        cart_number[0].innerHTML = 0 ;
        axios.get('http://localhost:3000/cart').then(carProducts => {
            showProductsInCart(carProducts.data);
            document.querySelector('#cart').style = "display:block;"
        })
    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        axios.post("http://localhost:3000/create-order")
        .then((respone) => {
            showNotification(respone.data.message , respone.success)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
})

function showProductsInCart(listofproducts){
    cart_items.innerHTML = "";
    listofproducts.forEach(product => {
        const id = `album-${product.id}`;
        const name = `${product.title}`;
        const img_src = `${product.imageUrl}`;
        const price = product.price;
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
        </span>
        <span class='cart-price cart-column'>${price}</span>
        <form onsubmit='deleteCartItem(event, ${product.id})' class='cart-quantity cart-column'>
            <input type="text" value="1">
            <button>REMOVE</button>
        </form>`
        cart_items.appendChild(cart_item)
    })
}

function deleteCartItem(e, prodId){
    e.preventDefault();
    axios.post('http://localhost:3000/cart-delete-item', {productId: prodId})
        .then(() => removeElementFromCartDom(prodId))
}

function showNotification(message, iserror){
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.style.backgroundColor = iserror ? 'red' : 'green';
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}<h4>`;
    container.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
    },2500)
}

function removeElementFromCartDom(prodId){
        document.getElementById(`in-cart-album-${prodId}`).remove();
        showNotification('Succesfuly removed product')
}

function listProducts(products){
    parentNode.innerHTML = '';
    products.forEach(product => {
        const productHtml = `
            <div id="album-${product.id}">
                <h3>${product.title}</h3>
                <div class="image-container">
                    <img class="prod-images" src=${product.imageUrl} alt="">
                </div>
                                <div class="prod-details">
                    <span>$<span>${product.price}</span></span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div>
            </div>`
        parentNode.innerHTML += productHtml;
    })
}

function listOrderProducts(orders){
    console.log(orders)
    parentNodeForOrders.innerHTML = '';

    if(orders.length < 0){
        alert("No orders done Yet, Order something !")
    }

    orders.forEach(order => {

        let id = document.createElement('ul');
        id.innerText= `#Order id = ${order.id}`;
        document.querySelector('#order-content').appendChild(id);

        order.products.forEach(product => {

            let title = document.createElement('li');
            title.innerText=  `Product = ${product.title}`;
            document.querySelector('#order-content').appendChild(title);

            let quantity = document.createElement('li');
            quantity.innerText= `quantity = ${product.orderItem.quantity}` ;
            document.querySelector('#order-content').appendChild(quantity)
        })
    })
}

function showPagination({
    currentPage,
    hasNextPage,
    hasPreviousPage,
    lastPage,
    nextPage,
    previousPage
}) {
    pagination.innerHTML = '';

    if(hasPreviousPage){
        const btn2 = document.createElement('button')
        btn2.innerHTML = previousPage
        btn2.addEventListener('click', () => getProducts(previousPage))
        pagination.appendChild(btn2)
    }

    const btn1 = document.createElement('button')
    btn1.innerHTML = `<h3>${currentPage}</h3>`
    btn1.addEventListener('click', () => getProducts(currentPage))
    pagination.appendChild(btn1)

    if(hasNextPage){
        const btn3 = document.createElement('button')
        btn3.innerHTML = nextPage
        btn3.addEventListener('click', () => getProducts(nextPage))
        pagination.appendChild(btn3)
    }
    
}

function getProducts(pageNumber){
    const page = pageNumber; 
    axios
    .get(`${API_Backend}/products?page=${page}`)
    .then(({data : {products , ...pagedata}}) => {
        listProducts(products);
        showPagination(pagedata)
    })
    .catch((err) => {
        console.log(err);
    })
}
