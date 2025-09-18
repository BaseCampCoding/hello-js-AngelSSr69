let knightIsAwake = false;
let archerIsAwake = true;
let prisonerIsAwake = true;
let petDogIsPresent = false;


let canExecuteFastAttack = !knightIsAwake;
console.log('Fast Attack: '+ canExecuteFastAttack)
if (knightIsAwake == false) {
    canExecuteFastAttack = true
}
else {
    canExecuteFastAttack = false
}

let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log('Spy: '+ canSpy)

let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log('Signal Prisoner: '+ canSignalPrisoner)


let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake)
console.log('Free Prisoner: '+ canFreePrisoner)