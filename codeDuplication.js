// 坏味道: 代码重复 - 两个几乎相同的函数
function calculateTax1(income) {
    let tax = 0;
    if (income <= 50000) {
        tax = income * 0.15;
    } else if (income <= 100000) {
        tax = 50000 * 0.15 + (income - 50000) * 0.25;
    } else if (income <= 150000) {
        tax = 50000 * 0.15 + 50000 * 0.25 + (income - 100000) * 0.35;
    } else {
        tax = 50000 * 0.15 + 50000 * 0.25 + 50000 * 0.35 + (income - 150000) * 0.45;
    }
    console.log('Tax: ' + tax);
}

function calculateTax2(income) {
    let tax = 0;
    if (income <= 50000) {
        tax = income * 0.15;
    } else if (income <= 100000) {
        tax = 50000 * 0.15 + (income - 50000) * 0.25;
    } else if (income <= 150000) {
        tax = 50000 * 0.15 + 50000 * 0.25 + (income - 100000) * 0.35;
    } else {
        tax = 50000 * 0.15 + 50000 * 0.25 + 50000 * 0.35 + (income - 150000) * 0.45;
    }
    console.log('Tax: ' + tax);
}

// 更多重复代码
function validateEmail1(email) {
    if (!email || email.trim() === '') {
        console.log('Email is required');
        return;
    }
    if (!email.includes('@')) {
        console.log('Email must contain @');
        return;
    }
    if (!email.includes('.')) {
        console.log('Email must contain domain');
        return;
    }
    console.log('Email is valid');
}

function validateEmail2(email) {
    if (!email || email.trim() === '') {
        console.log('Email is required');
        return;
    }
    if (!email.includes('@')) {
        console.log('Email must contain @');
        return;
    }
    if (!email.includes('.')) {
        console.log('Email must contain domain');
        return;
    }
    console.log('Email is valid');
}

// 重复的验证逻辑
function validateUsername1(username) {
    if (!username || username.trim() === '') {
        console.log('Username is required');
        return false;
    }
    if (username.length < 3) {
        console.log('Username must be at least 3 characters');
        return false;
    }
    if (username.length > 20) {
        console.log('Username must be less than 20 characters');
        return false;
    }
    return true;
}

function validateUsername2(username) {
    if (!username || username.trim() === '') {
        console.log('Username is required');
        return false;
    }
    if (username.length < 3) {
        console.log('Username must be at least 3 characters');
        return false;
    }
    if (username.length > 20) {
        console.log('Username must be less than 20 characters');
        return false;
    }
    return true;
}

module.exports = { 
    calculateTax1, 
    calculateTax2, 
    validateEmail1, 
    validateEmail2,
    validateUsername1,
    validateUsername2
};
