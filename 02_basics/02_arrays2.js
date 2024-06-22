const marvel_heroes =["spiderman", "thor", "captain america"]
const dc_heroes = ["flask","batman","superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const newHeroes = [...marvel_heroes, ...dc_heroes]     //SPREAD OPERATOR
// console.log(newHeroes);

const arr2 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]            //array of arrays
const another_array = arr2.flat(Infinity)
// console.log(another_array);

console.log(Array.isArray("Vishal"))
console.log(Array.from("Vishal"))
console.log(Array.from({name:"Vishal"}));      //returns an empty array   // intersting case

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(100,200,300));
