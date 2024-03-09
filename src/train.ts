// Task I
function getDigits(input: string): string {
    // Regex pattern to match digits
    const regex = /\d/g;
    
    // Extract digits from the input string
    const digitsArray = input.match(regex);
    
    // Join the extracted digits into a new string
    if (digitsArray) {
        return digitsArray.join("");
    } else {
        return ""; // No digits found in the input string
    }
}

// Test the function
console.log(getDigits("m14i1t")); // Output: "141"


/* Project Standards:
   - Logging standards
   - Naming standards
       function, method, variable => CAMEL case
       class => PASCAL case
       folder => KEAB
       css => SNAKE case 
   - Error handling    
*/

/* 
Traditional API
Rest API
GraphQL API
....
*/

/**
 Traditional fronted development => BSSR => EJS
 tdf ni bssr deb ham ataymiz. frontend req yuboradi req handle qilib respond yuboradi. uni ejs framworkby did
 
 Modern fronted development => SPA (user's sppliation)=> REACT
 front backend dan faqat json data qabul qb, htmlni ozi hosil qiladi. react librirary by did

 */


// //Task H
// function getPositive(arr: number[]) {
//     let result = "";
//     for (let num of arr) {
//         if (num > 0) {
//             result += num.toString();
//         }
//     }
//     return result;
// }

// console.log(getPositive([3, -6, 9]));  // Output: "12"


// // Task H
// function gerReverse(input: string): string {
//     return input.split('').reverse().join('');
// }

// console.log(gerReverse("Uzbekistan")); // Output: natsikebzu
