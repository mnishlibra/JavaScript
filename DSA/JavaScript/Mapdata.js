// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
// Rewrite previous task in async await

const users = [
    {
      id: 1,
      name: "Jack",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Mike",
    },
  ];
  const userStatuses = [
    {
      id: 1,
      isActive: true,
    },
    {
      id: 2,
      isActive: true,
    },
    {
      id: 3,
      isActive: false,
    },
  ];
  
  const getUsers = () => {
    return new Promise((resolve) => {
      resolve(users);
    });
  };
  
  const getUserStatuses = () => {
    return new Promise((resolve) => {
      resolve(userStatuses);
    });
  };
 

const getMappedUsers = async () => {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();

    const mappedUsers = users.map((user) => {
        const isActive = userStatuses.find(
            (userStatus) => userStatus.id === user.id
        ).isActive;
        return {...user, isActive}
    }) 
    console.log("mappedUsers",getMappedUsers)
    catch(err) {
        console.log('err',err)
    }
}

getMappedUsers();