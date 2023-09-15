//1:Write a program that uses filter to remove all negative numbers from an array of numbers.
var arr:number[] = [2,-4,-5,6,7,10];
let positiveArray=arr.filter((element:number)=>{
    if (element>0){
        return element;
    }
});
console.log("remove negative number from an array of numbers",positiveArray);


//2:Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array 
//where each number is multiplied by 2.
const arr2:number[]=[1,2,3,4,5] ;
let multiplyByTwoArr=arr2.map((number)=>{
    if(number>0){
        return  2*number};
        });
        console.log('multiplying elements in an array',multiplyByTwoArr);

//3:Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the
// filter method to create a new array containing only the fruits with more than 5 characters.
const fruitNames:string[]=["apple","banana","cherry","date","grapes"];  
let longFruits=fruitNames.filter ((name)=> {
   if(name.length>=5){
//if we want to get only those fruits name which are greater than 5 characters then 
//we can use only greater sign with name.length i.e:(name.length>5).
    return name};
    });
    console.log ("fruits containing more than 5 characters" ,longFruits);

    
//4:Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods
// together to create a new array containing the squares of even numbers.
const arrayOfNumbers:number[]=[1,2,3,4,5,6,7,8,9,10];
let squareOfEvenNumber=arrayOfNumbers .filter((num) =>{
    return num%2==0}).map((evenNum)=>{
        return Math.pow(evenNum,2)});
        console.log ('square of even number' ,squareOfEvenNumber );


//5:Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create 
//a new array where each temperature is converted to Fahrenheit 
//using the formula (Celsius * 9/5) + 32.
const celsiusTemp:number[]=[0,10,20,30,40 ];
let fahrenheitTemp=celsiusTemp.map((temp)=>
{return temp*(9/5)+32} 
);
console.log ("convert celsius to fahrenheit ",fahrenheitTemp );


//6:Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to
// create a new array containing the doubled values of odd numbers.
const arrOfNumbers:number[]=[3,6,9,12,15,18 ];
let doubledValues=arrOfNumbers.filter((element:number)=>{
    return element%2!=0}).map((oddNum)=>{
      return Math.pow(oddNum,2);
      });
      console.log("doubled value of odd numbers is",doubledValues );


//7:Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach 
//method to log each name with an exclamation mark at the end, e.g., "Alice!". 
const namesArray : string [] =["Alice","Bob","Charlie","David","Emily"] ;
namesArray.forEach((name)=>{
    console.log(`${name}!`);
});

//ALHUMDULILAH ASSIGNMENT COMPLETE ...............................