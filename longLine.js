// 坏味道: 过长的行 - 超过推荐的行长度限制
function longLine() {
    let veryLongString = 'This is a very long string that exceeds the recommended line length limit and makes the code hard to read and maintain. It should be broken into multiple lines or stored in a variable.';
    let veryLongCalculation = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 + 21 + 22 + 23 + 24 + 25 + 26 + 27 + 28 + 29 + 30;
    
    console.log(veryLongString);
    console.log(veryLongCalculation);
}

function longFunctionCall() {
    // 过长的函数调用
    let result = processUserData('John', 'Doe', 'john.doe@example.com', '123-456-7890', '123 Main Street', 'New York', 'NY', '10001', 'USA', '1990-01-01', '123-45-6789', 'DL123456789', 'P123456789', 'Jane Doe', '987-654-3210', 'Spouse', 'None', 'None', 'None', 'Blue Cross', 'BC123456789', '1234567890123456', '021000021', '4111111111111111', '12/25', '123');
    
    console.log(result);
}

function longObjectLiteral() {
    // 过长的对象字面量
    let user = {name: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main Street', city: 'New York', state: 'NY', zipCode: '10001', country: 'USA', dateOfBirth: '1990-01-01', socialSecurityNumber: '123-45-6789', driverLicenseNumber: 'DL123456789', passportNumber: 'P123456789', emergencyContactName: 'Jane Doe', emergencyContactPhone: '987-654-3210', emergencyContactRelationship: 'Spouse', medicalConditions: 'None', allergies: 'None', medications: 'None', insuranceProvider: 'Blue Cross', insurancePolicyNumber: 'BC123456789', bankAccountNumber: '1234567890123456', routingNumber: '021000021', creditCardNumber: '4111111111111111', creditCardExpiry: '12/25', creditCardCVV: '123'};
    
    console.log(user);
}

function longArrayLiteral() {
    // 过长的数组字面量
    let longArray = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13', 'item14', 'item15', 'item16', 'item17', 'item18', 'item19', 'item20', 'item21', 'item22', 'item23', 'item24', 'item25', 'item26', 'item27', 'item28', 'item29', 'item30'];
    
    console.log(longArray);
}

function longTernaryOperator() {
    let x = 10;
    let y = 20;
    
    // 过长的三元运算符
    let result = x > y ? 'x is greater than y and this is a very long string that makes the line too long' : 'y is greater than or equal to x and this is also a very long string that makes the line too long';
    
    console.log(result);
}

function longLogicalExpression() {
    let a = true;
    let b = false;
    let c = true;
    let d = false;
    let e = true;
    let f = false;
    
    // 过长的逻辑表达式
    let result = a && b && c && d && e && f || !a && !b && !c && !d && !e && !f || a && !b && c && !d && e && !f;
    
    console.log(result);
}

function longStringConcatenation() {
    let firstName = 'John';
    let lastName = 'Doe';
    let email = 'john.doe@example.com';
    let phone = '123-456-7890';
    let address = '123 Main Street';
    let city = 'New York';
    let state = 'NY';
    let zipCode = '10001';
    let country = 'USA';
    
    // 过长的字符串连接
    let fullAddress = firstName + ' ' + lastName + ' lives at ' + address + ', ' + city + ', ' + state + ' ' + zipCode + ', ' + country + ' and can be contacted at ' + email + ' or ' + phone;
    
    console.log(fullAddress);
}

function longMethodChain() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // 过长的方法链
    let result = data.filter(x => x > 5).map(x => x * 2).reduce((acc, x) => acc + x, 0).toString().split('').map(x => parseInt(x)).filter(x => x > 5).reduce((acc, x) => acc + x, 0);
    
    console.log(result);
}

function longConditionalStatement() {
    let user = {
        age: 25,
        income: 50000,
        creditScore: 750,
        employmentYears: 3,
        hasCoSigner: false,
        downPayment: 20000,
        loanAmount: 200000,
        propertyType: 'single-family',
        location: 'suburban'
    };
    
    // 过长的条件语句
    if (user.age >= 18 && user.age <= 65 && user.income >= 30000 && user.creditScore >= 700 && user.employmentYears >= 2 && (user.hasCoSigner || user.downPayment >= 20000) && user.loanAmount <= 500000 && (user.propertyType === 'single-family' || user.propertyType === 'condo') && (user.location === 'urban' || user.location === 'suburban')) {
        console.log('Loan approved');
    } else {
        console.log('Loan denied');
    }
}

function longFunctionDefinition() {
    // 过长的函数定义
    function veryLongFunctionNameWithManyWordsThatMakesTheLineTooLongAndHardToRead(firstParameter, secondParameter, thirdParameter, fourthParameter, fifthParameter, sixthParameter, seventhParameter, eighthParameter, ninthParameter, tenthParameter) {
        console.log('This function has too many parameters');
    }
    
    veryLongFunctionNameWithManyWordsThatMakesTheLineTooLongAndHardToRead('param1', 'param2', 'param3', 'param4', 'param5', 'param6', 'param7', 'param8', 'param9', 'param10');
}

module.exports = { 
    longLine, 
    longFunctionCall, 
    longObjectLiteral, 
    longArrayLiteral, 
    longTernaryOperator, 
    longLogicalExpression, 
    longStringConcatenation, 
    longMethodChain, 
    longConditionalStatement, 
    longFunctionDefinition 
};
