// Array

//declaration
const arr = [1,2,3,4,5];
//or
const arr2 = new Array(1,2,3,4);
console.log(arr2[0]);

// Methods
const myArr = [1,2,3,4,5,6,7,8];
myArr.push(10)// add value at the end
myArr.pop();// delete value from the end
myArr.unshift(3);//add value at the begining
myArr.shift();//delete value from the begining
console.log(myArr);
console.log(myArr.includes(66));//false
console.log(myArr.indexOf(3));//2
console.log(myArr.indexOf(33));//-1

const newArr = myArr.join();
console.log(newArr); //convert array into string

// slice,splice
console.log("A ",myArr);

const myAr1 = myArr.slice(1,3);
console.log(myAr1);
console.log("B ",myArr);


const myAr2 = myArr.splice(1,3);
console.log(myAr2);
console.log("C ",myArr);









