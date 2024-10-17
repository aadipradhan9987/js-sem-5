//arrays

//const myArr = [0 ,1 ,2 ,3 ,4 , 5]
//const myHero = [ "batman" , "superman" ]
//console.log(myArr[2]);

//array methods

//myArr.push(6);
//myArr.pop();

//myArr.unshift(4);
//myArr.shift(6)


//console.log(myArr.includes(4));
//console.log(myArr.indexOf(3));

//const mya1 = myArr.slice(1 , 3);
//console.log(mya1);

//const mya2 = myArr.splice(1 ,3 )
//console.log(mya2);

let marval_heros = ["ironman","thor","spiderman"]
let dc_heros = ["batman","flash","superman"]

const all= marval_heros.concat(dc_heros)
console.log(all);

const allheros = [...dc_heros,...marval_heros]
console.log(allheros);

console.log(Array.from("aaditya"));
console.log(Array.from({school :"PUSET"})); //in

let score1 =2000
let score2 = 3000
let score3 = 40000
console.log(Array.of(score1 ,score2 ,score3));








//console.log(myArr);



