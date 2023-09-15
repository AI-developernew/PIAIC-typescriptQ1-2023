"use strict";
//1) - Write a program to convert the temperature is 39 and convert from Celsius to Fahrenheit
// and vice verse.
//using function method
function CtoF(temp) {
    //var CTOF:number=39;
    //celcius to farenheit
    var result1 = temp * (9 / 5) + 32;
    console.log("celcius to farenheit", result1);
}
CtoF(39);
function FtoC(temp) {
    //var FTOC:number=39;
    //farenheit to celcius
    var result2 = temp - 32 * (5 / 9);
    console.log("farenheit to celcius", result2);
}
FtoC(39);
//2) - Write a program that calculates the percentage.
//Using function method
function percentage(marks) {
    //var obtainedMarks:number=1030;
    //var totalMarks:number=1100;
    var percentage = (1030 / 1100) * 100;
    console.log("percentage of marks is", percentage);
}
percentage(1030 / 1100);
//3)- Write a program that converts given number of days in to weeks and days
// such as 17 days = 2 weeks and 3 days.using function method.
function daysIntoWeeks(days, weeks, remainingDays) {
    //var days:number=17;
    //var weeks:number=Math.floor(days/7);
    //var remainingDays:number=days%7;
    console.log(`${weeks} weeks and ${remainingDays} days`);
}
daysIntoWeeks(17, 17 / 7, 17 % 7);
//4) - Write a program that calculates the discount for a product based on its price.
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
//using function method
function discountForProductPrice(price, discount1, discount2) {
    //var price:number=100;
    if (price >= 100) {
        //var discount1:number=price *0.1;
        console.log("apply a 10% discount");
    }
    else {
        //var discount2:number=price*0.05;
        console.log("apply a 5% discount");
    }
}
discountForProductPrice(100, 100 * 0.1, 100 * 0.05);
//Q5)Create a program that determines the category of a user-provided age. If the age is between
// 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult.
//using function method;
function categoryOfUserAge(age) {
    //var age:number=18;
    if (age >= 0 && age <= 12) {
        console.log("you are child");
    }
    else if (age >= 13 && age <= 19) {
        console.log("you are teenager");
    }
    else {
        console.log("you are adult");
    }
}
categoryOfUserAge(18);
//Q6) - Write a program that takes temperature and check it. 
//If it is cold then suggest the user to wear warm clothes and so on according to the weather.
//using function method;
function temperatureWarmOrCold(temp1) {
    //var temp1:number=41;
    if (temp1 < 32) {
        console.log("it is cold");
    }
    else {
        console.log("it is warm");
    }
}
temperatureWarmOrCold(41);
//Q7) - Write a program that checks if the given number is  divisible by 3 or 5 or both 
//or not divisible by anyone show output accordingly.using function method.
function divisibleBy3Or5(num) {
    //var num:number=18;
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("it is divisible by 3 or 5");
    }
    else {
        console.log("it is not divisible by 3 or 5");
    }
}
divisibleBy3Or5(18);
//Q8) - Write a program that checks if the given year is leap year or not.
//using function method;
function yearIsLeapOrNot(year) {
    //var year:number=2023;
    if (year % 4 == 0) {
        console.log("it is leap yeAR");
    }
    else {
        console.log("it is not leap year");
    }
}
yearIsLeapOrNot(2023);
//Q9) - Develop a program that determines the day of the week. Ask the user for a number (1-7)
// and use nested if statements to print the corresponding day's name.
//using function method.
function daysName(day1, day2, day3, day4, day5, day6, day7) {
    // var day1:number=1;
    // var day2:number=2;
    // var day3:number=3;
    // var day4:number=4;
    // var day5:number=5;
    // var day6:number=6;
    // var day7:number=7;
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
}
daysName(1, 2, 3, 4, 5, 6, 7);
//Q10) Write a program that takes the number of units consumed by a user if it is 
//greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to 
//if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
//using function method.
function billAmount(units, priceOfUnit, calculated, tax1, tax2, tax3) {
    // var units:number=444;
    // var priceOfUnit:number=50;
    // var calculated:number=(units*priceOfUnit);
    if (units > 100) {
        //var tax1:number=(calculated*10)/100;
        console.log(`${calculated} is the total bill with 10% tax`);
    }
    else if (units > 200) {
        //var tax2:number=(calculated*15)/100;
        console.log(`${calculated} is the total bill with 15% tax`);
    }
    else if (units > 500) {
        //var tax3:number=(calculated*25)/100;
        console.log(`${calculated} is the total bill with 25%tax`);
    }
    else {
        console.log(`${calculated} is the total bill with 35% tax`);
    }
}
billAmount(444, 50, 444 * 50, 22200 * 10 / 100, 22200 * 15 / 100, 22200 * 25 / 100);
//ALHUMDULILAH ASSIGNMENT COMPLETE...........
