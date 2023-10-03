// #1
let daysNeededForProgress = Math.floor((100 - 50) / 20);
let totalDays = daysNeededForProgress + 1; // +1 день для завершения восхождения

console.log(`Черепашка заберётся на вершину на ${totalDays} день.`); // Ответ: 4


// #2
let n = 10;
let totalHandshakes = (n * (n - 1)) / 2;

console.log(`Общее количество рукопожатий для ${n} человек: ${totalHandshakes}`); // Ответ: 45

// #3
function removeDuplicates(inputStr) {
 return [...new Set(inputStr.split(','))].join(',');
}

let inputStr = "кошка,собака,лошадь,корова,кошка";
let resultStr = removeDuplicates(inputStr);
console.log(resultStr);  // "кошка,собака,лошадь,корова"
