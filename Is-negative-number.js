// will stop the loo if the array has any negative number and returns all the positive number  before the negative  number
// ============================================================================================================================
// input 
const numbers = [12,42,38,38,43,39,3,13,-1,67,235,3];
// function 
function onlyPositive(numbers) {
    let newNumber = [];
    for(const number of numbers){
        if(number < 0){
            break;
        }
        newNumber.push(number);
    }
    return newNumber;
}
// calling function 
const output = onlyPositive(numbers);
console.log(output);