// 坏味道: 硬编码字符串 - 字符串应该定义为常量或配置
function sendEmail(to, subject, body) {
    let smtpServer = 'smtp.gmail.com';
    let smtpPort = '587';
    let username = 'admin@company.com';
    let password = 'password123';
    let fromAddress = 'noreply@company.com';
    let companyName = 'My Company';
    let supportEmail = 'support@company.com';
    let website = 'www.company.com';
    
    // 发送邮件逻辑...
    console.log('Sending email from ' + fromAddress + ' to ' + to);
}

function validateUser(username, password) {
    if (username == null || username.trim() === '') {
        console.log('Username is required');
        return;
    }
    if (username.length < 3) {
        console.log('Username must be at least 3 characters');
        return;
    }
    if (username.length > 20) {
        console.log('Username must be less than 20 characters');
        return;
    }
    if (password == null || password.trim() === '') {
        console.log('Password is required');
        return;
    }
    if (password.length < 6) {
        console.log('Password must be at least 6 characters');
        return;
    }
    if (password.length > 50) {
        console.log('Password must be less than 50 characters');
        return;
    }
    
    console.log('User validation successful');
}

function processOrder(orderId) {
    if (orderId.startsWith('ORD')) {
        console.log('Processing order');
    } else if (orderId.startsWith('INV')) {
        console.log('Processing invoice');
    } else if (orderId.startsWith('REF')) {
        console.log('Processing refund');
    } else {
        console.log('Unknown order type');
    }
    
    if (orderId.length === 10) {
        console.log('Standard order');
    } else if (orderId.length === 12) {
        console.log('Priority order');
    } else if (orderId.length === 15) {
        console.log('Express order');
    } else {
        console.log('Invalid order ID length');
    }
}

function calculateTax(country, amount) {
    if (country === 'US') {
        if (amount > 0 && amount <= 10000) {
            console.log('Tax rate: 10%');
        } else if (amount > 10000 && amount <= 50000) {
            console.log('Tax rate: 15%');
        } else if (amount > 50000 && amount <= 100000) {
            console.log('Tax rate: 20%');
        } else {
            console.log('Tax rate: 25%');
        }
    } else if (country === 'CA') {
        if (amount > 0 && amount <= 15000) {
            console.log('Tax rate: 12%');
        } else if (amount > 15000 && amount <= 75000) {
            console.log('Tax rate: 18%');
        } else {
            console.log('Tax rate: 22%');
        }
    } else if (country === 'UK') {
        if (amount > 0 && amount <= 12500) {
            console.log('Tax rate: 0%');
        } else if (amount > 12500 && amount <= 50000) {
            console.log('Tax rate: 20%');
        } else if (amount > 50000 && amount <= 150000) {
            console.log('Tax rate: 40%');
        } else {
            console.log('Tax rate: 45%');
        }
    } else {
        console.log('Unknown country');
    }
}

function displayError(errorCode) {
    switch (errorCode) {
        case 'E001':
            console.log('Invalid username or password');
            break;
        case 'E002':
            console.log('User account is locked');
            break;
        case 'E003':
            console.log('Session has expired');
            break;
        case 'E004':
            console.log('Access denied');
            break;
        case 'E005':
            console.log('System maintenance in progress');
            break;
        default:
            console.log('Unknown error occurred');
            break;
    }
}

function validateFormField(fieldName, value, rules) {
    if (rules.required && (!value || value.trim() === '')) {
        console.log(fieldName + ' is required');
        return false;
    }
    
    if (rules.minLength && value.length < rules.minLength) {
        console.log(fieldName + ' must be at least ' + rules.minLength + ' characters');
        return false;
    }
    
    if (rules.maxLength && value.length > rules.maxLength) {
        console.log(fieldName + ' must be less than ' + rules.maxLength + ' characters');
        return false;
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
        console.log(fieldName + ' format is invalid');
        return false;
    }
    
    return true;
}

module.exports = { 
    sendEmail, 
    validateUser, 
    processOrder, 
    calculateTax, 
    displayError, 
    validateFormField 
};
