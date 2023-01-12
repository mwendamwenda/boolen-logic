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