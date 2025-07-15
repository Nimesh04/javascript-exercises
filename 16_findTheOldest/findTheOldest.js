const findTheOldest = function(array) {
    array.forEach(element => {
        if(element.yearOfDeath == undefined){
            let date = new Date().getFullYear();
            element.yearOfDeath =  date;
        }
    });
        

    
    let oldest = array.map((person) => 
            ({
            name: person.name,
            age: person.yearOfDeath - person.yearOfBirth
        })
    );
    let oldest1 = oldest.sort((a,b) =>b.age - a.age);
    console.log(oldest);
    return oldest1[0];
};

// Do not edit below this line
module.exports = findTheOldest;
