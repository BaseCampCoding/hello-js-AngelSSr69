let birdsPerDay = [5, 2, 6, 7, 9, 10, 20, 5, 3, 3, 1, 6, 8, 7];
let total = 0;

for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
}
console.log(total)

let week = 2;
let daysPerWeek = 7;
weekStart = (week - 1) * daysPerWeek;
weekEnd = week * daysPerWeek
let weekTotal = 0;

for (let i = weekStart; i < weekEnd && i < birdsPerDay.length; i++) {
  weekTotal += birdsPerDay[i];
}
console.log(weekTotal)


for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1
}
console.log(birdsPerDay)