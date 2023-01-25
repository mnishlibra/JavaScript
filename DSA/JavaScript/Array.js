// getArray = (arr,ele) => {
//     return [...arr,ele]
// }

// // console.log(getArray([1,2],4))

// concateArrays = (arr1,arr2) => {
//     return arr1.concat(...arr2)
// }

// console.log(concateArrays([1,3],[2,6,3,8]))

// removeDublicates = (arr) => {
//     return [...new Set(arr)]
// }



// const uniqueArr = arr => {
//     return arr.reduce((acc,el) => {
//         return acc.includes(el) ? acc : [...acc,el]
//     }, [])
// }
// console.log(uniqueArr([1,2,2,3,3,3,3,4,6,6]))


import getFullname, {getName,getSurName} from "./Modules.js"
console.log(
getName("Jack"),
getSurName("Sparrow"),
getFullname("Jack","Sparrow")
);