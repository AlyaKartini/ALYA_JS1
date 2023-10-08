// Example of using "If, Else, Nested If"
const score = 99;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: E");
}

// Example of using "Switch Case"
const languagePreference = 3;

switch (languagePreference) {
    case 1:
        console.log("Hello, welcome!");
        break;
    case 2:
        console.log("Wilujeng Sumping");
        break;
    case 3:
        console.log("Sugeng Rawuh");
        break;
    default:
        console.log("Unknown language preference. Please choose a valid option.");
}


// Example of using "For Statement"
let number = 12;

console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

// Example of using "While"
let Urutan = 6

while (Urutan<10) {
    Urutan ++
    console.log("Urutan ke-" + Urutan)
}

// Example of using "Do While"
let Urutan_Antrian = 8

do {
    Urutan_Antrian ++
    console.log("Urutan antrian ke-" + Urutan_Antrian);
} while (Urutan_Antrian <= 9)

// Example of using "Function"
function sum(a, b) {
    return a + b;
  }
  
  let result = sum(9, 8);
  console.log("Sum result: " + result);
