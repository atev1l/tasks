// #1
let distanceClimbed = 0;
let days = 0;

while (distanceClimbed < 100) {
 days++;
 distanceClimbed += 50;
 if (distanceClimbed >= 100) {
  break;
 }
 distanceClimbed -= 30;
}

console.log(`Черепашка заберётся на вершину на ${days} день.`); // Ответ: 4



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
