console.log('Person1: shows ticket'); 
console.log('Person3: shows ticket');
 
const preMovie = async () => {
    const promiseWigeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
       });

    let ticket
    try {
        ticket = await promiseWigeBringingTicks;
    } catch(e) {
        ticket = 'sad face' ; 
    }
    
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    
    const addButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('Got the coke sweety'));


    let = await Promise.all([getPopcorn,getColdDrinks,addButter])


    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log("wife: no I am hungry");

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log("wife: I need butter on my popcorn");

    let coke = await getColdDrinks;

    console.log(`wife: Thanks for this ${coke}`);

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcon`);
    console.log(`husband: i Anything Else darling ?`);
    console.log(`wife: NO I am good `);
    console.log(`husband: You eat too much`);

    return ticket ; 
};

preMovie().then((m) => console.log(m));



console.log('Person4: shows ticket');
console.log('Person5: shows ticket');
