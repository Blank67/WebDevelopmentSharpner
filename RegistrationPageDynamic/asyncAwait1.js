// //Before Async Await
// console.log(`Person1: Shows ticket.`);
// console.log(`Person2: Shows ticket.`);

// const promiseWifeBringingTicket = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(`ticket returned.`)
//     },3000);
// });

// const getPopcorn = promiseWifeBringingTicket.then((t) => {
//     console.log(`Wife: Here is the tickets.`);
//     console.log(`Husband: We should go in.`);
//     console.log(`Wife: No, I am hungry.`);
//     return new Promise((resolve,reject) => {
//         resolve(`[getPopcorn returns: ${t} and popcorn]`);
//     });
// });

// const getButter = getPopcorn.then((t2) => {
//     console.log(`Husband: I got some popcorn`);
//     console.log(`Husband: We should go in.`);
//     console.log(`Wife: No, I nedd butter on my popcorn.`);
//     return new Promise((resolve,reject) => {
//         resolve(`getButter returns: ${t2} and butter`);
//     });
// });

// getButter.then((text) => {console.log(text);})

// console.log(`Person4: Shows ticket.`);
// console.log(`Person5: Shows ticket.`);

//After Async Await
console.log(`Person1: Shows ticket.`);
console.log(`Person2: Shows ticket.`);

const preMovie = async() => {
    const promiseWifeBringingTicket = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`ticket return.`)
        },3000);
    });
    
    const getPopcorn = new Promise((resolve,reject) => {resolve(`popcorn return.`); });
    const getbutter = new Promise((resolve,reject) => {resolve(`butter return.`); });
    const getColdDrinks = new Promise((resolve,reject) => {resolve(`cold drinks return.`); });
    const getCandy = new Promise((resolve,reject) => {resolve(`candy return.`); });

    // let ticket = await promiseWifeBringingTicket;
    // console.log(`Wife: Here is the ${ticket}.`);
    // console.log(`Husband: We should go in.`);
    // console.log(`Wife: No, I am hungry.`);
    // let popcorn = await getPopcorn;
    // console.log(`Husband: I got some ${popcorn}.`);
    // console.log(`Husband: We should go in.`);
    // console.log(`Wife: No, I nedd butter on my popcorn.`);
    // let butter = await getbutter;
    // console.log(`Husband: i got some ${butter}.`);
    // console.log(`Husband: Shall we go?`);
    // console.log(`Wife: No, I need cold drinks too.`);
    // let coldDrink = await getColdDrinks;
    // console.log(`Husband: i got some ${coldDrink}.`);
    // console.log(`Husband: Shall we go?`);
    // console.log(`Wife: Ok.`);
    // console.log(`Done with everything!!`);
    let ticket;
    try{
        ticket = await promiseWifeBringingTicket;
        let[popcorn,butter,coke,candy] = await Promise.all([getPopcorn,getbutter,getColdDrinks,getCandy]);
        console.log(`${popcorn} ${butter} ${coke} ${candy}`);
    }catch(e){
        ticket = `ERROR SAD FACE!`;
    }

    return ticket;
};

preMovie().then((m) => {console.log(`Person 3: Shows ${m}.`);});

console.log(`Person4: Shows ticket.`);
console.log(`Person5: Shows ticket.`);