let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let position = 3;
let getItemResult = stack[position];
console.log(getItemResult);


position = 7
replacementCard = 33;
stack[position] = replacementCard;
console.log(stack[7]);


let newCardTop = 21;
stack.unshift(newCardTop);
console.log(stack)


position = 9
stack.splice(position, 1);
console.log(stack)


stack.shift();
console.log(stack)


let newCardBottom = 44;
stack.push(newCardBottom);
console.log(stack)


stack.pop();
console.log(stack)


let stackSize = 55;
let checkSizeOfStackResult = stack.length === stackSize;
/*if (stackSize == stack.length) {
    checkSizeOfStackResult = true;}
else{
    checkSizeOfStackResult = false;}*/
console.log(checkSizeOfStackResult)



/*if (stack.length == stackSize) {
    let checkSizeOfStackResult = true;
    console.log(checkSizeOfStackResult);
    console.log(stack.length);
    console.log(stackSize);}
else {
    let checkSizeOfStackResult = false;
    console.log(checkSizeOfStackResult);
    console.log(stack.length);
    console.log(stackSize);}*/