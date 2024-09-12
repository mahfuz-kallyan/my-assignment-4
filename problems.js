function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return 'Invalid Input'
    }
    const difference = income - expenses;
    return tax = difference * .20;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax(6000, 8000));

//// problem 2
function sendNotification(email) {
    if (email.includes('@') === false) {
        return "Invalid Email"
    }
    const mail = email.split('@')
    const userName = mail[0];
    const domainName = mail[1];
    const notificationMessage = userName + ' ' + 'sent you an email from' + ' ' + domainName;
    return notificationMessage;
}
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));


// problem 3
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    const hasNumber = /[0-9]/.test(name);
    return hasNumber
    
}
console.log(checkDigitsInName('raju123'));
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('elmu3'));
console.log(checkDigitsInName('suman'));
console.log(checkDigitsInName([1, 2, 3]));
console.log(checkDigitsInName(true));
console.log(checkDigitsInName(['raj']));


// problem 4
function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj === null || Array.isArray(obj)){
        return "Invalid Input"
    }
    
    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily === true){
        finalScore = finalScore + 20
    }
    if(finalScore >= 80){
        return true;
    }
    else{
        return false
    }

}
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }

));
console.log(calculateFinalScore({ name: "Rajib", testScore: 55,  schoolGrade: 30, isFFamily : true }

));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 20, isFFamily : true }

));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore('hello'));
console.log(calculateFinalScore([1, 2]));

// problem 5

function  waitingTime(waitingTimes  , serialNumber) {
if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return "Invalid Input"
}
    let sum = 0;
    for(const time of waitingTimes){
        sum = sum + time 
    }
    const averageTimes = Math.round(sum / waitingTimes.length);
    const remainingPeople = serialNumber - waitingTimes.length -1
    const waitingTime = averageTimes * remainingPeople;
    return waitingTime;
    
    
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([ 13, 2 ], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([ 6 ], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6, 2]", 9));
console.log(waitingTime([ 3, 5, 7, 11, 6 ], "9"));










