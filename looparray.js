const mans = ['rakib', 'raju', 'rashed', 'rifat'];


// for of loop use kore 
for (let man of mans) {
    console.log(man);
}


// example 2 for basic use kore loop
console.log("example.2");
const womans = ['jorina', 'morina', 'jabina', 'halima', 'doli']
for (let i = 0; i < womans.length; i++) {
    console.log(womans[i]);
}



// example 3 while loop use kore array loop kora
console.log("example 3");
const number = [100, 500, 400, 800, 900, 700];
let i = 0;
while (i < number.length) {
    console.log(number[i]);
    i++;
}

// example array revers
console.log("array revers kora");
const array = [1, 2, 3, 4, 5, 6, 9]
// nicher 3 line k uncomment krle nicher program a somossa hoi
// console.log(array);
// const arr = array.reverse();
// console.log(arr);



console.log("onno arek niyome")
const n = []
for (let nums of array) {
    n.unshift(nums)
}
console.log(n);


console.log("example 3 onno nitome revers");
const re_num = [];
for (let i = 0; i < array.length; i++) {
    const sum = array[i]
    re_num.unshift(sum)
}
console.log(re_num);








// example 4 
console.log("example 4 start array loop number array");
const hasa_num = [500, 600, 700, 800, 900, 1000];
const ja_ma=[]
for (let i = hasa_num.length - 1; i >= 0; i--){
    const rahman=hasa_num[i];
    console.log(rahman);
    ja_ma.push(rahman);
}
console.log(ja_ma);






// example 5 niche pothme out simple ase string vabe pore jodi "const dak=[]" declear kori opor a and porobortite "dak.push(name)" pore dak ta k output dekhano hoyese
console.log("string array loop revers");
const names=['hasan', 'mark', 'bill', 'rohen'];
const dak=[];
for(let name of names){
    console.log(name);
    dak.push(name);
}
console.log(dak);
