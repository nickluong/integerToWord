// Convert an Integer to word, for example
// input: 9999
// output: Nine thousand nine hundred and ninety nine  

const ONE_TO_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

let intToWord = (num) => {
    if(num === 0) return "Zero";

    let i = 0; 
    let result = "";

    while(num > 0){
        if(num % 1000 !== 0){
            result = helper(num % 1000)+THOUSANDS[i]+" "+result;
        }
        num = Math.floor(num /= 1000);
        i++;
    }

    return result;
}

function helper(num) {
    if(num === 0)
        return "";
    else if (num < 20)
        return ONE_TO_20[Math.floor(num)] + " ";
    else if (num < 100)
        return TENS[Math.floor(num / 10)] + " " + helper(num % 10);
    else 
        return ONE_TO_20[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
}   

console.log(intToWord(100000));