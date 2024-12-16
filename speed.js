// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

let UserInput=parseInt(prompt("Enter car speed"),10);
function speedcalculator(speed){
    if(isNaN(speed) || speed <0){
        return"Enter a valid speed";
    }
    else if(speed<=70){
        return "ok";
    }
    else{
        let points= math.floor((speed - 70)/5);
        if(points >12){
            return"License Suspended";
        }
        else{
            return "Demerit points: ${points}";
        }
    }
}
console.log(speedcalculator(UserInput));


