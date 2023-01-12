const hasDriversLicense = true;//A
const hasGoodVision = true;//B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision){
//     console.log('sarah is able to drive');
// }else{
//     console.log('someone should drive');
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);


if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('sarah is able to drive');
}else{
    console.log('someone should drive');
}

//code challenge

const dolphinAverage = ((97+112+101)/3);
const koalasAverage = ((109+95+106)/3);
console.log(dolphinAverage,koalasAverage);

if(dolphinAverage > koalasAverage && dolphinAverage >= 100){
 console.log('dolphins wins the trophy');
}else if(dolphinAverage === koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100){
    console.log('both wins the trophy')
}else if(koalasAverage > dolphinAverage && koalasAverage >= 100){
    console.log('koalas wins the trophy');
}else{
    console.log('no one wins the trophy');
}
