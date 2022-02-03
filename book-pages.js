// Page requirment on three books calculate total pages our books
// ==========================================================
// input 
const Mathemetics = 1;
const Bangla = 0;
const English = 1;

// function 
function pageRequirments( Mathemetics, Bangla, English) {
    const mathPerBook = 100;
    const banglaPerBook = 200;
    const englishPerBook = 300;
    if(typeof Mathemetics != 'number' || typeof Bangla != 'number' || typeof English != 'number'){
        return " please input the number";
    }
    const mathBook = mathPerBook * Mathemetics;
    const banglaBook = banglaPerBook * Bangla;
    const englishBook = englishPerBook * English;
    const totalPages = mathBook + banglaBook + englishBook;
    return totalPages; 
}
// calling function 
const output = pageRequirments(Mathemetics,Bangla,English);
console.log(output);