// 坏味道: 注释掉的代码 - 不再使用的代码应该被删除
function oldMethod() {
    // 这个方法已经不再使用，但是没有被删除
    // console.log('Old implementation');
    // let oldVar = 'deprecated';
    // let oldNumber = 42;
    // let oldFlag = true;
    
    // 新的实现
    console.log('New implementation');
}

function processData(data) {
    // 旧的验证逻辑
    // if (data == null) {
    //     return;
    // }
    // if (data.length < 5) {
    //     return;
    // }
    // if (data.includes('test')) {
    //     return;
    // }
    
    // 新的验证逻辑
    if (data == null || data.length < 5 || data.includes('test')) {
        return;
    }
    
    console.log('Processing: ' + data);
}

function calculateTax(income) {
    // 旧的税率计算
    // let tax = 0;
    // if (income <= 30000) {
    //     tax = income * 0.1;
    // } else if (income <= 60000) {
    //     tax = 30000 * 0.1 + (income - 30000) * 0.2;
    // } else {
    //     tax = 30000 * 0.1 + 30000 * 0.2 + (income - 60000) * 0.3;
    // }
    
    // 新的税率计算
    let tax = 0;
    if (income <= 50000) {
        tax = income * 0.15;
    } else if (income <= 100000) {
        tax = 50000 * 0.15 + (income - 50000) * 0.25;
    } else {
        tax = 50000 * 0.15 + 50000 * 0.25 + (income - 100000) * 0.35;
    }
    
    console.log('Tax: ' + tax);
}

function sendEmail(to, subject, body) {
    // 旧的邮件发送逻辑
    // let smtpServer = 'smtp.oldserver.com';
    // let smtpPort = '25';
    // let username = 'olduser@company.com';
    // let password = 'oldpassword';
    
    // 新的邮件发送逻辑
    let smtpServer = 'smtp.gmail.com';
    let smtpPort = '587';
    let username = 'admin@company.com';
    let password = 'password123';
    
    console.log('Sending email via ' + smtpServer);
}

function validateUser(username, password) {
    // 旧的验证逻辑
    // if (username == null || username.trim() === '') {
    //     console.log('Username is required');
    //     return false;
    // }
    // if (username.length < 3) {
    //     console.log('Username must be at least 3 characters');
    //     return false;
    // }
    // if (password == null || password.trim() === '') {
    //     console.log('Password is required');
    //     return false;
    // }
    // if (password.length < 6) {
    //     console.log('Password must be at least 6 characters');
    //     return false;
    // }
    
    // 新的验证逻辑
    if (username == null || username.trim() === '' || username.length < 3) {
        console.log('Invalid username');
        return;
    }
    if (password == null || password.trim() === '' || password.length < 6) {
        console.log('Invalid password');
        return;
    }
    
    console.log('User validation successful');
}

function processOrder(orderId) {
    // 旧的订单处理逻辑
    // if (orderId.startsWith('OLD')) {
    //     console.log('Processing old format order');
    //     return;
    // }
    
    // 新的订单处理逻辑
    if (orderId.startsWith('ORD')) {
        console.log('Processing order');
    } else if (orderId.startsWith('INV')) {
        console.log('Processing invoice');
    } else {
        console.log('Unknown order type');
    }
}

module.exports = { 
    oldMethod, 
    processData, 
    calculateTax, 
    sendEmail, 
    validateUser, 
    processOrder 
};
