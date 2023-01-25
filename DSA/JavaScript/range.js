// inRange = (start,end) => {
//     let result = []
//     for(let i=start; i<=end; i++){
//         result.push(i)
//     }
//     return result
// }

const inRange = (start,end) => {
    return [...Array(end).keys()].map((el) => el + start)
}


console.log(inRange(2,30))