// MITASK ZC
//type scriptda Shunday function yozing, uni number parametri bolsin va function qabul
// parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
//MASALAN: celsiusToFahrenheit(0) return 32

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

// Test
console.log(celsiusToFahrenheit(0)); // 32

//========================//

// //MITASK ZB
// /**type scriptda Shunday function yozing, uni 2 ta number parametri bolsin va
//  *  berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45
//  */
// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const random: number = randomBetween(30, 50);
// console.log("randomBetween:", random);

//===================//

// //MITASK ZA
// /**type scriptda Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}] */

// interface Person {
//   age: number;
// }

// function sortByAge(people: Person[]): Person[] {
//   return people.slice().sort((a, b) => a.age - b.age);
// }

// // Test
// const sortedPeople = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
// console.log(sortedPeople); // [{ age: 13 }, { age: 21 }, { age: 23 }]

// /**Ushbu kodda, Person interfeysi obyektlarning age xususiyatini aks ettiradi.
//  * sortByAge funksiyasi obyektlar to'plamini qabul qilib,
//  * uning age xususiyatiga ko'ra saralash bo'yicha tartiblash uchun
//  * sort funktsiyasidan foydalanadi. Afsuski, slice metodi orijinal massivni o'zgartirmaydi,
//  * shuning uchun uni o'zgartirmasdan ishlatishimiz mumkin. */

//======================

// //MITASK  Z
// /**type scriptda Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin.
//  *  Function arraydagi juft sonlarni yigindisini qaytarsin.
// MASALAN: sumEvens([1,2,3]) return 2 */
// function juftSonlarniYigindisi(arr: number[]): number {
//   let yigindi = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       yigindi += arr[i];
//     }
//   }
//   return yigindi;
// }
// console.log(juftSonlarniYigindisi([1, 2, 3]));

//===================//

// // MITASK  Y
// /**Shunday function yozing, uni 2 ta array parapetri bolsin.
//  * Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
//  */
//  function findIntersection(arr1: number[], arr2: number[]): number[] {
//     const intersection: number[] = [];

//     // Birinchi arraydagi har bir elementni tekshirish
//     for (const num of arr1) {
//         // Agar ikkinchi arrayda bu element mavjud bo'lsa va hali ro'yxatda yo'qligini tekshiramiz
//         if (arr2.includes(num) && !intersection.includes(num)) {
//             // Agar shart bajarilgan bo'lsa, bu elementni intersection ro'yxatiga qo'shamiz
//             intersection.push(num);
//         }
//     }

//     return intersection;
// }

// // Test qilish
// console.log(findIntersection([1, 2, 3], [3, 2, 0])); // Natija: [2, 3]
// /**Bu funksiya arr1 va arr2 deb nomlangan ikkala array qabul qiladi,
//  * va ular orasida bir xil elementlarni topib, ularni yangi bir arrayda qaytaradi. */

//====================//

// // MITASK  X
// //**Shunday function yozing, uni object va string parapetrlari bolsin.
// //Function string parametri object ichida necha marotaba
// //takrorlanganligini qaytarsin (nested object bolsa ham sanasin)

// function countOccurrences(obj: any, key: string): number {
//     let count = 0;

//     // Rekursiv funksiya orqali nested objectlarni ham tekshiramiz
//     function countInObject(obj: any) {
//         for (const prop in obj) {
//             if (obj.hasOwnProperty(prop)) {
//                 if (typeof obj[prop] === 'object') {
//                     countInObject(obj[prop]); // Agar propertiyani object bo'lsa, rekursiv chaqirib tekshiramiz
//                 } else if (prop === key && typeof obj[prop] === 'string') {
//                     count++;
//                 }
//             }
//         }
//     }

//     countInObject(obj); // Asosiy funksiyani chaqiramiz
//     return count;
// }

// // Test qilish
// console.log(countOccurrences({
//     model: 'Bugatti',
//     steer: {model: 'HANKOOK',
//     size: 30}}, 'model')); // 2

/**Bu TypeScript-da berilgan objectni o'z ichida yoki nested objectlarda
 * qaysi belgi necha martaba takrorlanganligini hisoblaydigan funksiya. */

//=================================//

// //MITASK  W

// function chunkArray<T>(arr: T[], size: number): T[][] {
//     const result: T[][] = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }

// // Test
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
// const chunkedArray = chunkArray(arr, 4);
// console.log(chunkedArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// /**Ushbu kod chunkArray nomli generic funksiya yaratadi.
//  * Bu funksiya berilgan massivni berilgan uzunlikda kesib chiqib,
//  * natijada yangi bir massiv ro'yxatida qaytaradi.
//  * Keyinchalik, siz boshqa massivlar bilan ham ushbu funksiyani sinab ko'rishingiz mumkin. */

//====================//

// //MITASK  U
// /**Type Scriptda Shunday function yozing, uni string parametri bolsin va stringdagi harf va
//  * u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1} */
// function countChars(inputString: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};

//   for (let char of inputString) {
//       char = char.toLowerCase(); // Harflarni kichik harflarga aylantiramiz
//       if (charCount[char]) {
//           charCount[char]++;
//       } else {
//           charCount[char] = 1;
//       }
//   }

//   return charCount;
// }

// // Test qilish
// console.log(countChars("helloJohn")); // { h: 2, e: 1, l: 2, o: 2, j: 1, n: 1,}

/**Ushbu kod yordamida countChars funksiyasi string parametr qabul qilib,
 * har bir harfni necha marta takrorlanganligini hisoblaydi va natijada ob'ekt shaklida qaytaradi,
 * har bir harf uchun necha marta takrorlanganligini ko'rsatadi. Bu kod barcha kichik va
 * katta harflarni bir qatorda qabul qiladi, shuningdek, katta-kichik harf farqini ko'rib chiqaradi. */

//===========================//

// // MITASK U
// // Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// //MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
// function sumOdds(num: number): number {
//   let count = 0;
//   for (let i = 1; i <= num; i += 2) {
//       count++;
//   }
//   return count;
// }

// // Test qiling
// console.log(sumOdds(9)); // 4
// console.log(sumOdds(11)); // 6

//========================//

// // // * T - TASK *
// // Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin
// // va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// // MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]
// function mergeSortedArrays(arr_list1: number[], arr_list2: number[]) {
//     let newArray: number[] = [];
//     let i: number = 0;
//     let j: number = 0;

//     while (i < arr_list1.length && j < arr_list2.length) {
//       if (arr_list1[i] < arr_list2[j]) {
//         newArray.push(arr_list1[i]);
//         i++;
//       } else {
//         newArray.push(arr_list2[j]);
//         j++;
//       }
//     }

//     // mobodo array ichida owiqcha qopketgan number bo`lsa
//     while (i < arr_list1.length) {
//       newArray.push(arr_list1[i]);
//       i++;
//     }

//     while (j < arr_list2.length) {
//       newArray.push(arr_list2[j]);
//       j++;
//     }

//     return newArray;
//   }

//   const arr_list1: number[] = [0,3,4,31];
//   const arr_list2: number[] = [4,6,30];

//   console.log(mergeSortedArrays(arr_list1, arr_list2));

//=====================//

// // MITASK S
// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     let totalSum = (n * (n + 1)) / 2;
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += nums[i];
//     }

//     return totalSum - sum;
// }

// // Test
// console.log(missingNumber([3, 0, 1])); // Konsolga 2 chiqadi

// /**Quyidagi TypeScript funktsiyasi berilgan sonlardan tashkil topgan massivni qabul qilib,
//  * massivdagi o'rinboshsiz sonni topib uni qaytaradi:

// Ushbu funktsiya quyidagi tartibda ishlaydi:

// 1. `n` o'zgaruvchisiga massiv uzunligi olinadi.
// 2. `totalSum` o'zgaruvchisiga 0 dan n gacha bo'lgan butun sonlar yig'indisini topish formulasi orqali hisoblanadi.
// 3. `sum` o'zgaruvchisiga massivdagi barcha elementlar yig'indisi hisoblanadi.
// 4. `totalSum` va `sum` ni ayirmoq orqali o'rinboshsiz son topiladi va uni qaytaradi.

// Yuqoridagi misolda `missingNumber([3, 0, 1])` ni chaqirganimizda konsolga 2 chiqadi,
// chunki 0, 1, va 3 sonlari orasida 2 tushib qolgan son. */

//==============================//

// // MITASK R
// function evaluateStringExpression(expression: string): number {
//     // If the expression is empty, return 0
//     if (!expression) return 0;

//     // Evaluate the expression using the built-in eval() function
//     const result = eval(expression);

//     // Check if the result is a number
//     if (typeof result === 'number') {
//         return result;
//     } else {
//         // If the result is not a number, return NaN (Not a Number)
//         return NaN;
//     }
// }

// // Test the function with an example expression
// const expressionResult = evaluateStringExpression("1+2");
// console.log(expressionResult); // natija: 3

// /**Bu funksiya berilgan ifoda orqali matnni tekshirib,
//  * uni JavaScriptning eval() funksiyasi yordamida hisoblaydi.
//  * Agar natija raqam bo'lsa, u son holatida qaytariladi.
//  * Aks holda, NaN (Son emas) qaytariladi. */

// //==2 usul==/
// function calculate(expression: string): number {
//     // If the expression is empty, return 0
//     if (!expression) return 0;

//     // Qatorning ikkita qismiga bo'lib ajratib olish
//     const parts = expression.split('+');

//     // Qismning birinchi va ikkinchi sonlarini hisoblash
//     const firstNumber = parseInt(parts[0]);
//     const secondNumber = parseInt(parts[1]);

//     // Sonlarni qo'shib natijani qaytarish
//     return firstNumber + secondNumber;
// }

// // Test the function with an example expression
// const result = calculate("1+3");
// console.log(result); // natija: 4

// /**Bu funksiya matnni qo'shish belgisi (+) orqali ikkita qismga bo'lib ajratib,
//  * ularni sonlarga o'giradi va ularni qo'shib, natijani qaytaradi.
//  * Agar matnda + belgisi bo'lmagan bo'lsa, funksiya 0 ni qaytaradi. */

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
