let ratePerHour = 60;
let hoursWorked = 8;
let dayRate = ratePerHour * hoursWorked;

let budget = 1000;
let workdays = Math.floor(budget / dayRate)

let billable = 22;
let monthlyDiscount = (billable * dayRate) * .2;

let fullMonths = Math.floor(35 / billable);
let remainingDays = 35 % billable;


let discountedMonthlyRate = billable * dayRate - monthlyDiscount;
let remainingCost = remainingDays * dayRate;
let totalProjectCost = discountedMonthlyRate + remainingCost;
