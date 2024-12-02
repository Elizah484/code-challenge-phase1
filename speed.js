// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.


function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if(speed <= speedLimit){//the speed limit is less than or equal to 70 it shall print ok 
        console.log("Ok");
    }else{
        const points = Math.floor(speed- speedlimit/ kmPerDemeritPoint);
        console.log('Points:$(points');

        if(points > 12){
            console.log("License suspended");
        }
    }
}