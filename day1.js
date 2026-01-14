let name ="narayan";
let age = 18;
console.log("Name:", name);
console.log("Age:",age);

function add(a,b){
    return a + b;
}
console.log (add(5, 6));
console.log (add(20,30));

let numbers = [1,2,3,4,5];
let fruits = ["apple", "banana", "mango"];

console.log(fruits);
console.log(numbers);

console.log(numbers[1]);
console.log(numbers[3]);

for (let i = 0; i < numbers.length; i ++){
    console.log(numbers[i]);
}

let doubled = numbers.map(function(num){
    return num*2;
});
console.log(doubled);

let evenNumbers= numbers.filter( num=> num%2 ==0);
console.log(evenNumbers);

let sum = numbers.reduce((total, num) =>{
    return total + num;
} ,0);
console.log(sum);
