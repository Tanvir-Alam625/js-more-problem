// convert centimeter to meter 
// ===============================
//input
const centimeters = 123;
// function 
function centimeterToMeter(centimeter) {
    let meter = centimeter/100;
    return meter;
    
}
// calling function 
const output = centimeterToMeter(centimeters);
console.log(output);
