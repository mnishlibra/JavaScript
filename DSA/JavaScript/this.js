// function getItem() {
//     console.log(this)
// }

// // getItem()

// const item = {
//     title : "Balll",
//     getItem() {
//         console.log("this",this)
//     }
// }

// item.getItem()

class Item {
    title = "Ball";
    getItem() {
        function someFn(){
            console.log("this",this)
        }
        someFn();
    }
}

const item = new Item();
item.getItem()