//To calculate numbers
import inquirer from "inquirer";

function continueCalculation(){ 
inquirer
.prompt([{
  name : "num1" ,
  type : "number" ,
  message : "Enter your first number?" ,
} , {
  name : "operation" ,
  type : "list" ,
  message : "Enter the operation?" ,
  choices : ["Addition" , "Substraction" , "Multiplication" , "Division"] ,
} , {
  name : "num2" ,
  type : "number" ,
  message : "Enter your second number?" ,
} , {
  name : "Continue" ,
  type : "confirm" ,
  message : "Do you want to perform another calculation"
}   
]) 
.then((result)=>{
  console.log(result);

switch (result.operation) {
  case "Addition" :
  console.log(result.num1 + result.num2);
  break ;
  case "Substraction" :
    console.log(result.num1 - result.num2);
  break ;
  case "Multiplication" :
    console.log(result.num1 * result.num2);
  break ;
  case "Division" :
    console.log(result.num1 / result.num2);
  break ;
  default :
  break ; 
} 

  if(result.Continue){
    continueCalculation() ;  // For Countinue Calculating
  }
  else{
    console.log("Good Bye !");
    
  }
 }) ;
}
continueCalculation() ;  //Start program by calling function
 
/*
                              //Collect user data
import inquirer from "inquirer";

function getUserInformation(){
  inquirer
  .prompt([{
    name : "Name" ,
    type : "string" ,
    message : "Enter your name?" ,
  } , {
    name : "Age" ,
    type : "number" ,
    message : "Enter your age?"
  } , {
    name : "favouriteLanguage" ,
    type : "input" ,
    message : "Enter your favourite language?",
  } , {
    name : "continue" ,
    type : "confirm" ,
    message : "Do you want to perform another"
  }
])

.then((answers)=>{
  console.log(`Name :${answers.Name}`);
  console.log(`Age : ${answers.Age}`);
  console.log(`Favourite programming language : ${answers.favouriteLanguage}`);
  
  
  
  if(answers.continue){
      getUserInformation() ; //To continue program
  }
  else{
    console.log("Good bye!");
    
  }
})
}
getUserInformation() ;
*/