// Check that user with such name exists in array of objects

const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
    },
  ];
  
// const isNameExists = (name,arr) => arr.some((ele) => ele.name === name)

const isNameExists = (name,arr) => {
    const index = arr.findIndex((ele) => ele.name === name);
    return index > 0;
}

console.log(isNameExists("Johnny",users))