//1:Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName:string = "seerathanif";  //variable declaration
console.log("Hello "+personName+", would you like to learn some Python today?");

//2:Name Cases: Store a person’s name in a variable, and then print that person’s name
// in lowercase, uppercase, and titlecase.
let myName:string="seerathanif";  	//variable assignment
myName=myName.toLowerCase();		 //lowercase      
console.log(myName);           
myName=myName.toUpperCase();		//uppercase	  
 console.log(myName); 
myName=myName[0].toUpperCase()+myName.slice(1).toLowerCase() ; 	 
console.log(myName);

//3:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of
// its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new."
const einsteinQuote: string ="A person who never makes a mistake never tries anything new.";
const einsteinAuthor : string="AlbertEinstein";
console.log(`"${einsteinQuote}" - ${einsteinAuthor}`);

//4:Famous Quote 2: Repeat Exercise 3, but this time store the famous person’s name in a variable 
//called famous_person. Then compose your message and store it in a new variable called message.
// Print your message.
const famousPerson:string="AlbertEinstein";
const message=`${famousPerson} once said,"A person who never makes a mistake never tries anything new."`;
console.log(`${message}`);

//5:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
//and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
myName = "\t   SEERAT HANIF\n" //first print name with white-space
console.log("print name with whitespace:");
console.log(myName)
// Strip the whitespace and print the name again.
var stripped_myName = myName.trim();
console.log("print name after stripping whitespace:");
console.log (stripped_myName );

//6:Number Eight: Write addition, subtraction, multiplication, and division operations that each 
//result in the number 8. Be sure to enclose your operations in print statements to see the results.
var addition:number=4+4;      //print result in number 8 by addition 
console.log (`addition of two numbers is:${addition}`);
var subtraction:number=15-7;   //print result in number 8 by subtraction
console.log ("subtraction of two numbers:"+subtraction);
var multiplication:number=4*2;    //print result in number 8 by multiplication
console.log ("multiplication of two numbers:" + multiplication);
var division:number=16/2;        //print result in number 8 by division
console.log ("division of two numbers :" + division);

//7:You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
for (let i = 0; i < 4; i++) {
    console.log(8);
  }

//8:Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.
var favoriteNum:number=28;             //store my fav num as variable
var favoriteMessage:string=`My Favorite Num Is ${favoriteNum}`;     //compose msg for printing
console.log(favoriteMessage);          //print msg

//9:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.

/*
* Program Name: helloWorld.ts;
* Author : seerat hanif;
* Date Created: 12/10/2021;
*/
function sayHello(): void{
    console.log('hello world');
}
sayHello();


//10:Names: Store the names of a few of your friends in a array called names. Print each person’s
// name by accessing each element in the list, one at a time.
const names=["Faiza","Zuha", "Fatima"];       //create an array named "names".
function printArrayNames(){        //define function to print elements from array
    for ( let index = 0 ;index<names.length;index++){
        console.log(`friend=${names[index]}`);  //print all elements of array
        }
    };
        printArrayNames();                  //call above defined function


//11:Greetings: Start with the array you used in Exercise 10, but instead of just printing each
// person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
/*
const greeting="Hello";           //declare string constant
*/

var greeting="Hi";                         //change value of declared const
function printPersonalizedGreeting(){      //define function to print personalized greeting
    for ( var index = 0 ;index<names.length;index++){
     console.log(`${greeting} ${names[index]}!`);//print personalized greeting for every friend
    }
};
printPersonalizedGreeting();

//12:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a
// car, and make a list that stores several examples. Use your list to print a series of
// statements about these items, such as “I would like to own a Honda motorcycle.”
var motorCycles = ["Honda", "Yamaha", "Kawasaki", "Suzuki"];
motorCycles.forEach((value)=>{         //loop through values of array
    if ((value=="Honda")||(value =='Yamaha')||(value=='Kawasaki')||(value=='Suzuki')){              //check if any of the values match
        console.log("I would love to buy "+value+"!");    //if yes then print statement
        }
    });

//13:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var guestList=["Iqra","Farwa","Uswa"];     //create new array containing names
guestList.forEach((element) => {            //loop through contents of array
    console.log( `Welcome to my party ${element}!` );   //print welcome message
    });

//14:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you 
//need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Update your program from Exercises 9-12 using this information to rearrange your guest lists.
var guestList=[("Faiza"),("Noor")];             //reassigning content of existing array
console.log('New Invitation');                  //printing new invitation
for (let i=0;i<=guestList.length-1;i++){        //loop through contents of array
    console.log (`${guestList[i][0]}, I hope you'll come.`);  //print updated invitation
    };

//.Start with your program from Exercise 13. Add a print statement at the end of your program
// stating the name of the guest who can’t make it.

guestList=['Nora'];                            //reassigning content of existing array
console.log(`Sorry ${guestList}, we're having trouble finding another table.`);//print error message

//Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.
guestList=['bushra','habiba', 'azra']       //modifying array by adding more elements in it
console.log ('Invitation sent!');               //print success message

//Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach ((name)=> {
    console.log ("Hello "+`${name}`+", I'm sorry but I couldn't find any other tables.");});

//15:More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
guestList.unshift('Ahmad')                     //adding element into front of an array
console.log(`${guestList} has been added as first member`);      //printing success message
guestList.splice(Math.floor(guestList.length/2),0,'Mohammad')         //inserting element between two
console.log(`${guestList} has been inserted between two members`)          //printing success message
guestList.push('Rahman')                       //adding element after last element inside array
console.log(`${guestList} has been added as last member`);           //printing success message
guestList.forEach((name)=>{                    //loop through all elements inside array
 console.log(`Hi ${name},I am happy to see you again!`);})    //printing success message

//16:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
// for the dinner, and you have space for only two guests.

//• Modify your program from Exercise 15 to remove the last two names from your list, then print
//a third set of invitation messages, one for each remaining person on your list.
guestList = ['Ahmed', "Ali", "<NAME>", '<NAME>', 'Habib', 'Zaid',]     //updating array
const removedGuests = guestList.pop();              //remove last item from array
removedGuests                                        //displaying deleted value
console.log(`${removedGuests} has left us...`);   //printing success message
guestList.shift();                                   //delete first element form array
console.log("The hostess will be waiting for you!");            //printing success message
guestList                                            //displaying current state of array

//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person 
//letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 3)                        //checking if length greater than or equal to 4
{                                                   //if true loop continues otherwise break
    const removedGuest=guestList.pop();//remove last item from array
    console.log (`${removedGuest} Sorry ,we don't have enough room right now.. `); }

//• Print a message to each of the two people still on your list, letting them 
//know they’re still invited. 
var guestList:string[]=['iram','iqra','noor','muskan'];   
for (let i=0; i<guestList.length ; i++){                //loop till index reaches its limit
    console.log (`We are still looking for another ${guestList[i]} .`); }//end of loop

//• Remove the last two names from your list, so you have an empty list. Print your list to
// make sure you actually have an empty list at the end of your program.
guestList=[];                                         //emptying array
console.log ("Our party is over");                      //printing success message


//17:Seeing the World: Think of at least five places in the world you’d like to visit.
/*• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let b:number=5;
let a:number=10;
function sortArray(arr : string[]) {
    function sortDescending(arr:number[]) {
        return arr.sort((a, b) => b - a); // Sorting array in descending order
    }
    
    // Example usage:
    const myArray = [5, 2, 9, 1, 5, 6];
    const sortedArray = sortDescending(myArray);
    console.log(sortedArray); // This will print the sorted array in descending order
  
    };
    const countries = ['India', 'China', 'United States', 'Indonesia', 'Brazil'] as const;
const myArr = ['Mumbai', 'Delhi', 'Kolkata', 'Bangalore'];

// Sorting myArr in alphabetical order
const sortedArr = [...myArr].sort((a, b) => a.localeCompare(b));

// Reversing the sortedArr to create new arrays
const reversedSortedArr1 = [...sortedArr].reverse();
const reversedSortedArr2 = [...sortedArr].reverse();

// Creating a copy of the initial array
const unsortedArr = [...myArr];

// Sorting the unsortedArr and creating a new array
const reversedSortedArr3 = [...unsortedArr].sort((a, b) => b.localeCompare(a));

// Reversing the sortedArr in place
sortedArr.reverse();
const reversedSortedArr4 = [...sortedArr];

//unsorted array
const reversedUnsortedArr5= unsortedArr.reverse();
console.log ('Reversed Copy Of Original Array:',reversedUnsortedArr5)     


console.log(sortedArr); // Sorted in alphabetical order
console.log(reversedSortedArr1); // Reversed copy of sortedArr
console.log(reversedSortedArr2); // Another reversed copy of sortedArr
console.log(reversedSortedArr3); // Sorted in reverse alphabetical order
console.log(reversedSortedArr4); // Reversed original sortedArr

//18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list. 
//• Show that your array is still in its original order by printing it.
/*
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order.
 Print the list to show that its order has changed.*/
 function seeTheWorld() {
    let arr = ["New York", "America","Europe","China","SaudiArab"];
    let sortedArr = [];
    let revSortedArray=[];
    let printOriginalOrder=()=>{
        for (let i =0 ; i<arr.length;i++){
            console.log(`My Favourite City Is ${arr[i]}`);
            }
            }
            printOriginalOrder ();
            function sortAlphabetically(){
                for (let j =0 ;j < arr.length-1;j++)
                {
                    if ((arr [j]<arr[j+1])){
                        const temp = arr[j + 1];
                        arr[j + 1]=arr[j];
                        }else break;}
                        }
                        printOriginalOrder ()
                        }
                        seeTheWorld();

//19:Think of something you could store in a array. For example, you could make a list of
//mountains, rivers, countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.
function thinkOfSomethingToStoreInAnArray() {
    var cities = ["Faisalabad", "Lahore", "Islamabad"];
    var countries = ["Pakistan", "America", "Italy"]
    var mountains = ["Alps", "Tibetan Plateau", "Machu Picchu", "Kilimanjaro"];
    console.log("list of different items:",(cities),(countries),(mountains));
}
thinkOfSomethingToStoreInAnArray();

//20:They think of something you could store in a TypeScript Object. Write a program that
// creates Objects containing these items.
interface Person {
    name: string;
    age: number;
    address: string;
  }
  
  const seeratHanif = {
    name: "Seerat Hanif",
    age: 18,
    address: "Faisalabad",
  };
  
  const iqraHanif = {
    name: "Iqra Hanif",
    age: 32,
    address: "Italy(Milan)",
  };
  
console.log(seeratHanif);
console.log(iqraHanif);

//21:Intentional Error: If you haven’t received an array index error in one of your programs
//yet, try to make one happen.Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.....
var myArray = [5, "hello", "world"]; //this is not allowed
myArray[3] = "seerat";
console.log(myArray);

//22:Conditional Tests: Write a series of conditional tests. Print a statement describing each
// test and your prediction for the results of each test.
//Your code should look something like this:
/*
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')*/
//• Look closely at your results, and make sure you understand why each
//line evaluates to True or False
//• Create at least 10 tests. Have at least 5 tests evaluate to True and 
//another 5 tests evaluate to False.
let num1 = 10;
let num2 = 5;
let str1 = 'hello';
let str2 = 'world';
let bool1 = true;
let bool2 = false;

// Test 1: Check if num1 is greater than num2
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);

// Test 2: Check if str1 is equal to str2
console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);

// Test 3: Check if num1 is less than or equal to num2
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);

// Test 4: Check if str1 is not equal to str2
console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);

// Test 5: Check if bool1 is equal to true
console.log("Is bool1 == true? I predict True.");
console.log(bool1 == true);

// Test 6: Check if bool2 is equal to true
console.log("Is bool2 != FALSE? I predict False.");
console.log(bool2 != false);

// Test 7: Check if num1 plus num2 is equal to 15
console.log("Is num1 + num2 == 15? I predict True.");
console.log(num1 + num2 == 15);

// Test 8: Check if str1 concatenated with str2 is equal to 'helloworld'
console.log("Is str1 + str2 != 'helloworld'? I predict FALSE.");
console.log(str1 + str2 != 'helloworld');

// Test 9: Check if bool1 OR bool2 is true
console.log("Is bool1 || bool2? I predict True.");
console.log(bool1 || bool2);

// Test 10: Check if num1 is equal to 10 AND str1 is equal to 'hello'
console.log("Is num1 != 10 && str1 == 'hello'? I predict FALSE.");
console.log(num1 != 10 && str1 == 'hello');
