const flag1 = true;
const flag2 = true;
const flag3 = true;
const flag4 = true;
const flag5 = true;

function buyCar(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag1){
                resolve(`Bought a Car.`);
            }else{
                reject(`Can't buy a Car.`);
            }
        },5000);
    });
}

function planTrip(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag2){
                resolve(`Planned a trip to Himachal.`);
            }else{
                reject(`Can't plan the trip.`);
            }
        },2000);
    });
}

function reachDestination(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag3){
                resolve(`Reached Himachal.`);
            }else{
                reject(`Can't reach Himachal.`);
            }
        },1000);
    });
}

function goToFamousSpots(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag4){
                resolve(`Went on treckking.`);
            }else{
                reject(`Stayed in room.`);
            }
        },500);
    });
}

function backFromTrip(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag5){
                resolve(`Reached home.`);
            }else{
                reject(`Trip was extended.`);
            }
        },1000);
    });
}

async function trip(){
    try{
        const msg1 = await buyCar();
        console.log(msg1);
    }catch(err){console.log(err);}

    try{
        const msg2 = await planTrip();
        console.log(msg2);
    }catch(err){console.log(err);}   
    
    try{
        const msg3 = await reachDestination();
        console.log(msg3);
    }catch(err){console.log(err);} 
    
    try{
        const msg4 = await goToFamousSpots();
        console.log(msg4);
    }catch(err){console.log(err);}
    
    try{
        const msg5 = await backFromTrip();
        console.log(msg5);
    }catch(err){console.log(err);}
}


trip();