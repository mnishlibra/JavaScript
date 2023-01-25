// let multiply = (a) => {
//     return (b) => {
//         return a*b
//     }
// }

const multiply = (a) => (b) => (a*b)


console.log(multiply(3)(4))