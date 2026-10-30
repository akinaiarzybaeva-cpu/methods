// map()-  ар бир элементти өзгөртөт
// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(result);


// filter() — шартка туура келгендерди тандайт
// let numbers = [5, 12, 8, 20, 3, 15];

// let result = numbers.filter(function(number) {
//     return number > 10;
// });

// console.log(result);

// reduce() — баарын бир мааниге бириктирет
let numbers = [10, 20, 30, 40];

let result = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(result);