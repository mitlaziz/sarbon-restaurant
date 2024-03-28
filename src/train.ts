// MITASK R
function evaluateStringExpression(expression: string): number {
    // If the expression is empty, return 0
    if (!expression) return 0;

    // Evaluate the expression using the built-in eval() function
    const result = eval(expression);

    // Check if the result is a number
    if (typeof result === 'number') {
        return result;
    } else {
        // If the result is not a number, return NaN (Not a Number)
        return NaN;
    }
}

// Test the function with an example expression
const expressionResult = evaluateStringExpression("1+2");
console.log(expressionResult); // natija: 3

/**Bu funksiya berilgan ifoda orqali matnni tekshirib, 
 * uni JavaScriptning eval() funksiyasi yordamida hisoblaydi. 
 * Agar natija raqam bo'lsa, u son holatida qaytariladi. 
 * Aks holda, NaN (Son emas) qaytariladi. */

//==2 usul==/
function calculate(expression: string): number {
    // If the expression is empty, return 0
    if (!expression) return 0;

    // Qatorning ikkita qismiga bo'lib ajratib olish
    const parts = expression.split('+');

    // Qismning birinchi va ikkinchi sonlarini hisoblash
    const firstNumber = parseInt(parts[0]);
    const secondNumber = parseInt(parts[1]);

    // Sonlarni qo'shib natijani qaytarish
    return firstNumber + secondNumber;
}

// Test the function with an example expression
const result = calculate("1+3");
console.log(result); // natija: 4

/**Bu funksiya matnni qo'shish belgisi (+) orqali ikkita qismga bo'lib ajratib, 
 * ularni sonlarga o'giradi va ularni qo'shib, natijani qaytaradi. 
 * Agar matnda + belgisi bo'lmagan bo'lsa, funksiya 0 ni qaytaradi. */



//====================================//



// // MITASK Q
// /**TypeScriptda Shunday function yozing, u 2 ta parametrgga ega bolib 
//  * birinchisi object, ikkinchisi string. 
//  * Agar string parametri objectning propertysi bolsa true, 
//  * propertysi bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; 
// hasProperty({name: "BMW", model: "M3"}, "year") return false */
// function hasProperty(obj: object, propName: string): boolean {
//     return obj.hasOwnProperty(propName);
// }

// // Test qilamiz 
// console.log(hasProperty({name: "BMW", model: "M3"}, "model")); // true
// console.log(hasProperty({name: "BMW", model: "M3"}, "year")); // false


// //=========================//

// function checkPropertyExists(obj: any, propName: string): boolean {
//     return propName in obj;
// }

// // Test qilish
// const myObject = { name: "BMW", year: 2024 };
// console.log(checkPropertyExists(myObject, "name"));  // true
// console.log(checkPropertyExists(myObject, "address"));  // false
// //


//=======================================//
// //MIT Task P
// //TypeScriptda Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// //MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//     return Object.entries(obj);
// }
// // Test
// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);  // Narx bo'yicha massiv: [['a', 10], ['b', 20]]
// // Bu funktsiya berilgan obyektni iteratsiya qiladi va har bir xususiyat va 
// // uning qiymatini bir qatorning elementi sifatida qaytaradi. 
// // Object.entries funktsiyasi bu maqsadga mos keladi.
// // Test qismida kodni sinash uchun:

// //2 chi usu;
// function objectToArray2(obj: Record<string, any>): Array<[string, any]> {
//     return Object.entries(obj);
// }
// // Test
// const result2 = objectToArray({ a: 10, b: 20 });
// console.log(result); // Narx bo'yicha massiv: [['a', 10], ['b', 20]]



//=======================================//
// //Mit Task O
// //Quyidagi TypeScript funksiyasi, har xil valuelardan iborat array qabul qilib, 
// //faqat sonlarni hisoblab chiqadi va ularni yig'indisini qaytaradi:
// function calculateSumOfNumbers(array: any[]): number {
//     let sum: number = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             sum += array[i];
//         } else if (typeof array[i] === 'string' && !isNaN(parseInt(array[i]))) {
//             sum += parseInt(array[i]);
//         }
//     }
//     return sum;
// }

// // Funksiyani sinov uchun
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // Natija: 45

// //Bu kod faqat sonlarni hisoblash uchun typeof operatorini va isNaN() funksiyasini ishlatadi. 
// //Bu, son emas bo'lgan qiymatlarni hisobga olmaydi. Sizning masalangizda, 
// //son emas bo'lgan qiymatlar hisobga olinmaydi, shuningdek, 
// //"10" qiymati son sifatida hisoblanadi. Natijada, 45 qaytariladi.


//==================//

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
 
//=============//
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

//=============//
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
