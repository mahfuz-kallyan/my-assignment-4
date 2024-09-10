function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return 'Invalid Input'
    }
    const difference = income - expenses;
    return tax = difference * .20;
}
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));
// console.log(calculateTax(6000, 8000));

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







