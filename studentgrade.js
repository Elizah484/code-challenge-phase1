//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

       // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function getStudentGrades(results){
       let results =  prompt("Enter student marks(0-100):");
       results = Number(results)
       if (results >= 80 && results <= 100){
              return'A'
       }else if(results >= 60 && results <=69){
              return'B'
       }else if (results >=59 && results <=49){
              return'c'
       }else if( results >= 40 && results <= 49){
              return'D'
       }else{results <= 40
              return'E'
       }
}       
console.log(getStudentGrade());


       