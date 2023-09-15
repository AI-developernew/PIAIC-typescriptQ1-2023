"use strict";
//Q1) - Write a program to convert the temperature from Celsius to Fahrenheit and vice versa.
var temp = 41;
//celcius to farenheit
var CtoFtemp = temp * (9 / 5) + 32;
console.log("celcius to farenheit is", CtoFtemp);
//farenheit to celcius
var FtoCtemp = temp - 32 * (5 / 9);
console.log("farenheit to celcius is", FtoCtemp);
//Q2) - Write a program that calculates the percentage.
var obtainedMarks = 1030;
var totalMarks = 1100;
var result = obtainedMarks / totalMarks * 100;
console.log("marks percentage is", result);
//Q3) - Write a program that converts given number of days in to weeks and days 
//such as 17 days = 2 weeks and 3 days.
var days = 17;
var weeks = Math.floor(days / 7);
var remainingDays = days % 7;
console.log(`${weeks} weeks and ${remainingDays} days`);
//Q4) - Write a program that calculates the discount for a product based on its price.
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price = 100;
if (price >= 100) {
    var discount = price * 0.1;
    console.log("apply a 10% discount");
}
else {
    var discount = price * 0.05;
    console.log("apply a 5% discount");
}
//Q5)Create a program that determines the category of a user-provided age. If the age is between
// 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult.
var age = 18;
if (age >= 0 && age <= 12) {
    console.log("you are child");
}
else if (age >= 13 && age <= 19) {
    console.log("you are teenager");
}
else {
    console.log("you are adult");
}
//Q6) - Write a program that takes temperature and check it. 
//If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temp1 = 41;
if (temp1 < 32) {
    console.log("it is cold");
}
else {
    console.log("it is warm");
}
//Q7) - Write a program that checks if the given number is  divisible by 3 or 5 or both 
//or not divisible by anyone show output accordingly.
var num = 18;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("it is divisible by 3 or 5");
}
else {
    console.log("it is not divisible by 3 or 5");
}
//Q8) - Write a program that checks if the given year is leap year or not.
var year = 2023;
if (year % 4 == 0) {
    console.log("it is leap yeAR");
}
else {
    console.log("it is not leap year");
}
//Q9) - Develop a program that determines the day of the week. Ask the user for a number (1-7)
// and use nested if statements to print the corresponding day's name.
var day1 = 1;
var day2 = 2;
var day3 = 3;
var day4 = 4;
var day5 = 5;
var day6 = 6;
var day7 = 7;
if (day1 == 1) {
    console.log("day1 is", "monday");
}
else if (day1 == 2) {
    console.log("day2 is", "tuesday");
}
else if (day1 == 3) {
    console.log("day3 is", "wednesday");
}
else if (day1 == 4) {
    console.log("day4 is", "thursday");
}
else if (day1 == 5) {
    console.log("day5 is", "friday");
}
else if (day1 == 6) {
    console.log("day6 is", "saturday");
}
else if (day1 == 7) {
    console.log("day7 is", "sunday");
}
else {
    console.log("no more days");
}
//Q10) Write a program that takes the number of units consumed by a user if it is 
//greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to 
//if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
var units = 444;
var priceOfUnit = 50;
var calculated = (units * priceOfUnit);
if (units > 100) {
    var tax = (calculated * 10) / 100;
    console.log(`${calculated} is the total bill with 10% tax`);
}
else if (units > 200) {
    var tax = (calculated * 15) / 100;
    console.log(`${calculated} is the total bill with 15% tax`);
}
else if (units > 500) {
    var tax = (calculated * 25) / 100;
    console.log(`${calculated} is the total bill with 25%tax`);
}
else {
    console.log(`${calculated} is the total bill with 35% tax`);
}
