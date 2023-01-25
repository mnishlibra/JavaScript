// let arr = [3,5,4,7,1,9]

// console.log(arr.sort((a,b) => a - b))


const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
  ];

  
books.sort((book1,book2) => {
    const authorLastName1 = book1.author.split(" ")[1];
    const authorLastName2 = book1.author.split(" ")[1];
    return authorLastName1 < authorLastName2 ? -1 : 1; 
})

console.log(books)