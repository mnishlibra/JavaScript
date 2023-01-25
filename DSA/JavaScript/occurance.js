// // const occurences = (arr) => {
// //     //find the min value
// //     let min = Math.min(...arr)
// //     return min;
// //     let countMin = 0;
// //     for(let num in arr){
// //         if(arr[num] == min){
// //             countMin++;
// //         }
// //     }
// //     return countMin;
// // }



// console.log(occurences([2,4,3,6,4,5,2,2,2]))

const arr = [1,2,3,3,1,1,1,1,1]
const minValue = Math.min(...arr)
const minArr = arr.filter((ele) => ele === minValue)
console.log(minArr)