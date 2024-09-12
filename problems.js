function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input"
    }
    const difference = income - expenses;
    return tax = difference * .20;
}


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


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    const numbers = "0123456789"
    for(let i = 0; i < name.length; i++){
         if(numbers.includes(name[i])){
            return true;
         }   

    }
    return false;
    
}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    if (testScore > 50 || schoolGrade > 30) {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}


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


