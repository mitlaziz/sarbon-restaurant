//Mit Task O
//Quyidagi TypeScript funksiyasi, har xil valuelardan iborat array qabul qilib, 
//faqat sonlarni hisoblab chiqadi va ularni yig'indisini qaytaradi:
function calculateSumOfNumbers(array: any[]): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        } else if (typeof array[i] === 'string' && !isNaN(parseInt(array[i]))) {
            sum += parseInt(array[i]);
        }
    }
    return sum;
}

// Funksiyani sinov uchun
console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // Natija: 45

//Bu kod faqat sonlarni hisoblash uchun typeof operatorini va isNaN() funksiyasini ishlatadi. 
//Bu, son emas bo'lgan qiymatlarni hisobga olmaydi. Sizning masalangizda, 
//son emas bo'lgan qiymatlar hisobga olinmaydi, shuningdek, 
//"10" qiymati son sifatida hisoblanadi. Natijada, 45 qaytariladi.




// // Mit Task N
// function isPalindrome(word: string): boolean {
//     // Berilgan sozni to'g'ri bo'lib bo'lmagan halatida kichik harflarga o'tkazamiz va simvollarni tozalaymiz
//     const cleanedWord = word.toLowerCase().replace(/[\W_]/g, '');

//     // So'zning uzunligini hisoblaymiz
//     const length = cleanedWord.length;

//     // So'zni boshidan va oxiridan boshlab tekshirish uchun indekslar
//     let start = 0;
//     let end = length - 1;

//     // To'g'ri oqilgan so'zni tekshiramiz
//     while (start < end) {
//         if (cleanedWord[start] !== cleanedWord[end]) {
//             return false; // Agar bitta xilmasligi aniqlansa, false qaytaramiz
//         }
//         // Bir-biriga yaqinlashib ketamiz
//         start++;
//         end--;
//     }
//     return true; // Agar so'z palindrom bo'lsa, true qaytaramiz
// }

// // Test qilish
// console.log(isPalindrome("Anna")); // true
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man a plan a canal Panama")); // true

// //Bu funksiya berilgan sozning palindrom bo'lib bo'lmagligini tekshiradi. 
// //Kichik harflarga o'tkazish va simvollarni olib tashlash qo'shimcha qadam bo'lib,
//  //bu funksiya berilgan sozni to'g'ri o'qilganda ham, orqasidan o'qilganda ham 
//  //bir hil oqiladi yoki yo'qmi, shuni tekshiradi.
 

// // Mit Task M
// function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
//     // Berilgan raqamlar uchun kvadrat objectlarini hosil qilish
//     const squareObjects = numbers.map(num => {
//         return {
//             number: num,
//             square: num * num
//         };
//     });

//     return squareObjects;
// }

// // Funksiyani sinovdan o'tkazamiz
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); // Natija: [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]


// // Mit Task L
// function reverseSentence(sentence: string): string {
//   // Bo'sh stringni qaytarish
//   if (!sentence) {
//       return "";
//   }

//   // Berilgan stringni bo'lish
//   const words = sentence.split(" ");

//   // So'zlarni teskarisiga yozish va yangi stringga qo'shish
//   const reversedWords = words.map(word => {
//       // Har bir so'zni teskarisiga yozish
//       const reversedWord = word.split("").reverse().join("");
//       return reversedWord;
//   });

//   // Yangi stringni qaytarish
//   return reversedWords.join(" ");
// }

// // Funksiyani sinovdan o'tkazish
// const result = reverseSentence("I am the best Software engineer!");
// console.log(result); // Natija: ew ekil gnidoc


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
