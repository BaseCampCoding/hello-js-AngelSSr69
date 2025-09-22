let scoreBoard = {
    "The Best Ever":1000000, 
}

let newPlayerName = "Rob";
let newPlayerScore = 99999;
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard);


let playerToRemove = "Rob";
delete scoreBoard[playerToRemove];
console.log(scoreBoard);

let playerNameToUpdate = "The Best Ever";
let scoreToAdd = 900000;
scoreBoard[playerNameToUpdate] += scoreToAdd;
console.log(scoreBoard);


let mondayBonus = 100;
for(let player in scoreBoard){
    scoreBoard[player] += mondayBonus
}
console.log(scoreBoard)
/*for (const key in scoreBoard) {
    if (!Object.hasOwn(scoreBoard, key)) continue;
    
    scoreBoard[key] += mondayBonus;
}
console.log(scoreBoard)*/