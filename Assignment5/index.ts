 //1- Develop a program that calculates and prints the sum of the first ANY NUMBER
 //even numbers using a for loop.
var sum:number=0;
for(let i=1;i<=18;i++)
{
    if(i%2==0)
    {
        sum+=i;
    }
}console.log(sum);

// 2- Implement a program that uses a for loop to iterate through an array of numbers and
// print only the even numbers.
let arrayOfNumber:number[]=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers:number[]=[];
for(let index:number=1;index<=arrayOfNumber.length;index++)
{
    if(index%2==0)
    {
        evenNumbers.push(index)
    }
}
console.log("print only even numbers:",evenNumbers);

//3- Implement a program that uses a loop to iterate through an array of numbers and 
//remove all the even numbers from them and just leave the odd ones
let arrayOfNumbers:number[]=[11,12,13,14,15,16,17,18,19,20,21];
let removeEvenNumbers:number[]=[];
for(let j:number=0;j<arrayOfNumbers.length;j++)
{
    if(arrayOfNumbers[j]%2!=0)
    {
        removeEvenNumbers.push(arrayOfNumbers[j])
    }
}console.log("print only odd numbers",removeEvenNumbers);

//4- - Write a program that defines a function to calculate the area of a circle.
// The function should take the radius as input and return the calculated area.
function areaOfCircle(radius:number){
    let pi:number=3.14;
    let area:number=pi*radius*radius;
    return area;
}
let radius:number=22;
console.log("radius:",radius);
console.log("area of a circle:",areaOfCircle(radius));

//5 - Develop a program that reads a list of grades and uses the splice method to remove
// failing grades (below 50) from the array.
let listOfGrades:number[]=[1030,930,830,730,630,530,430,330,230];
for(let index:number=listOfGrades.length-1;index>=0;index--){
    if(listOfGrades[index]<450){
        listOfGrades.splice(index,1);
    }
}
   
    console.log("passed candidates:",listOfGrades);

//6- - Write a program that uses a function to find the largest element in an array of numbers.
let arrayOfNumbers2 :number[]=[10,20,30,40,50,60,70,80,90,100];
let largest:number=arrayOfNumbers2[0];
function largestElement(array:number[]){
    for (let ind=0; ind<array.length; ind++) {
        if (array[ind]>largest){
            largest = array[ind];
        }
    }
    return largest;
}
let largestNumber:number=largestElement(arrayOfNumbers2);
console.log("largest element in an array of numbers is :",{largestNumber});
