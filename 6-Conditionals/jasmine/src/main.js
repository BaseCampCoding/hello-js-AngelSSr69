let kind = "car";
let needsLicenseResult;

if (kind === "car" || kind === "truck") {
    needsLicenseResult = true;
}
else {
    needsLicenseResult = false;
}
console.log(needsLicenseResult)


let option1 = "Ford";
let option2 = "Mercedes-benz";

let chooseVehicleResult; 
if (option1 > option2) {
   chooseVehicleResult = option2 + " is clearly the better choice.";
}
else {
    chooseVehicleResult = option1 + " is clearly the better choice.";
}
console.log(chooseVehicleResult)


let originalPrice = 30000;
let age = 9;
let calculateResellPriceResult;

if (age < 3) {
    calculateResellPriceResult = originalPrice * .8;
}
else if (age > 10) {
    calculateResellPriceResult = originalPrice * .5;
}
else /*if (age >= 3 && age < 10)*/ {
    calculateResellPriceResult = originalPrice * .7;
}
console.log(calculateResellPriceResult)
