const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
      age: 20,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
      age: 18,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      age: 30,
    },
  ];

const name = users
    .sort((user1,user2) => user1>user2 ? 1 : -1)
    .filter((user) => user.age)
    .map((user) => user.name)

    console.log(name)
  
//   let userArray = [];
  
//   users.forEach(user => {
//     if(user.isActive){
//         userArray.push(user.name)
//     }
//   })
  
//   console.log(userArray)