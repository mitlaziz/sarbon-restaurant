// Mit Task L
function reverseSentence(sentence: string): string {
  // Bo'sh stringni qaytarish
  if (!sentence) {
      return "";
  }

  // Berilgan stringni bo'lish
  const words = sentence.split(" ");

  // So'zlarni teskarisiga yozish va yangi stringga qo'shish
  const reversedWords = words.map(word => {
      // Har bir so'zni teskarisiga yozish
      const reversedWord = word.split("").reverse().join("");
      return reversedWord;
  });

  // Yangi stringni qaytarish
  return reversedWords.join(" ");
}

// Funksiyani sinovdan o'tkazish
const result = reverseSentence("I am the best Software engineer!");
console.log(result); // Natija: ew ekil gnidoc


// //Mit task K
// function unliHarflarSoni(text:string): number {
//   const unliHarflar = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   let unliHarflarSoni = 0;

//   for(let i = 0; i < text.length; i++) {
//     if(unliHarflar.includes(text[i])) {
//       unliHarflarSoni++;
//     }
//   }
//   return unliHarflarSoni;
// }

// const text = "Alhamdulillah for everything";
// console.log('unliHarflarSoni:', unliHarflarSoni(text));



// //MIT Task I 
// function findLongestWord(str: any) {
//     // Split the string into array
//     let strSplit = str.split(" ");
//     // Return the first sorted item of the Array
//     return strSplit.sort((a: any, b: any) => b.length - a.length)[0];
//   }
//   const result = findLongestWord("I come from Uzbekistan");
//   console.log("result:", result);

// Task I
// function getDigits(input: string): string {
//     // Regex pattern to match digits
//     const regex = /\d/g;
    
//     // Extract digits from the input string
//     const digitsArray = input.match(regex);
    
//     // Join the extracted digits into a new string
//     if (digitsArray) {
//         return digitsArray.join("");
//     } else {
//         return ""; // No digits found in the input string
//     }
// }

// // Test the function
// console.log(getDigits("m14i1t")); // Output: "141"


/* Project Standards:
   - Logging standards
   - Naming standards
       function, method, variable => CAMEL case
       class => PASCAL case
       folder => KEAB
       css => SNAKE case 
   - Error handling    
*/

/*  Request:
Traditional API
Rest API
GraphQL API
....
*/

/** Fontend Developmant
 Traditional fronted development => BSSR => EJS
 tdf ni bssr deb ham ataymiz. frontend req yuboradi req handle qilib respond yuboradi. uni ejs framworkby did
 
 Modern fronted development => SPA (user's sppliation)=> REACT
 front backend dan faqat json data qabul qb, htmlni ozi hosil qiladi. react librirary by did

 */

 /** Cookies
  request join
  self destroy
  */

  /** VValidation:
   Frontend validation
   Pipe validaton- lekin Burakda iwlatmaymiz
   Backend validation
   Database validation 
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
