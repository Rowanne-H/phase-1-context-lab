/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(row){
    //TODO
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(dateStamp){
    console.log(dateStamp)
    let date = dateStamp.split(' ')[0];
    let hour = parseInt(dateStamp.split(' ')[1]);
    this.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: hour
    })
    return this;
}

let createTimeOutEvent = function(dateStamp){
    let date = dateStamp.split(' ')[0];
    let hour = parseInt(dateStamp.split(' ')[1]);
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: hour
    })
    return this;
}


let hoursWorkedOnDate = function(soughtDate){
    let timeInEventHour = this.timeInEvents.filter(e => e.date === soughtDate)[0].hour;
    let timeOutEventHour = this.timeOutEvents.filter(e => e.date === soughtDate)[0].hour;
    return (timeOutEventHour - timeInEventHour)/100;
}

let wagesEarnedOnDate = function(dateSought){
    let hours = hoursWorkedOnDate.call(this, dateSought);
    let payRate = this.payPerHour;
    return payRate*hours;
}

let findEmployeeByFirstName = function(employees, firstNameString){
    return employees.find(employee => employee.firstName === firstNameString);
}

let calculatePayroll = function(employees){
    return employees.reduce((acc, employee) => acc+=allWagesFor.call(employee), 0)
}

