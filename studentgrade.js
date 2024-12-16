//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

       // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


let UserInput2 = parseInt(prompt("Enter student marks:"));

function gradeCalculator(marks) {
       if (isNaN(marks)) { // Fixes the typo "isNAN" -> "isNaN"
               return "Enter a valid input";
           } 
       else if (marks < 0 || marks > 100) { 
               return "Enter valid marks between 0 and 100";
           } 
       else if (marks >= 80 && marks <= 100) { 
               return "A";
           } 
       else if (marks >= 60 && marks <= 79) { 
               return "B";
           } 
       else if (marks >= 50 && marks <= 59) { 
               return "C";
           } 
       else if (marks >= 40 && marks <= 49) { 
               return "D";
           } 
       else { // Remaining cases fall into grade E
               return "E";
           }
       }
       
console.log(gradeCalculator(UserInput2));