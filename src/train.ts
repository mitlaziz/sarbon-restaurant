console.log("HELLO WORLD");

//Task H

function getPositive(arr: number[]) {
    let result = "";
    for (let num of arr) {
        if (num > 0) {
            result += num.toString();
        }
    }
    return result;
}

console.log(getPositive([3, -6, 9]));  // Output: "12"


// // Task H
// function gerReverse(input: string): string {
//     return input.split('').reverse().join('');
// }

// console.log(gerReverse("Uzbekistan")); // Output: natsikebzu
