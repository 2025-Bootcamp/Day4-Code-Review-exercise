// 坏味道: 魔法数字 - 代码中直接使用数字，没有常量定义
function processOrder(orderId) {
    if (orderId > 0 && orderId < 1000000) {
        if (orderId % 2 === 0) {
            console.log('Processing even order');
        } else {
            console.log('Processing odd order');
        }
        
        if (orderId > 100 && orderId < 1000) {
            console.log('Priority order');
        } else if (orderId > 1000 && orderId < 10000) {
            console.log('Standard order');
        } else if (orderId > 10000 && orderId < 100000) {
            console.log('Bulk order');
        } else {
            console.log('Special order');
        }
    }
}

function calculateDiscount(price) {
    if (price > 100) {
        price = price * 0.9; // 10% discount
    } else if (price > 50) {
        price = price * 0.95; // 5% discount
    } else if (price > 25) {
        price = price * 0.98; // 2% discount
    }
    console.log('Final price: ' + price);
}

function validateAge(age) {
    if (age < 0 || age > 150) {
        console.log('Invalid age');
        return;
    }
    
    if (age < 18) {
        console.log('Minor');
    } else if (age < 65) {
        console.log('Adult');
    } else {
        console.log('Senior');
    }
}

function processTime(seconds) {
    if (seconds < 60) {
        console.log(seconds + ' seconds');
    } else if (seconds < 3600) {
        console.log(seconds / 60 + ' minutes');
    } else if (seconds < 86400) {
        console.log(seconds / 3600 + ' hours');
    } else {
        console.log(seconds / 86400 + ' days');
    }
}

function calculateInterest(principal, rate, time) {
    // 年利率转换为月利率
    let monthlyRate = rate / 12;
    // 月数
    let months = time * 12;
    // 复利计算
    let amount = principal * Math.pow(1 + monthlyRate, months);
    let interest = amount - principal;
    
    console.log('Interest earned: ' + interest);
}

function validatePassword(password) {
    if (password.length < 8) {
        console.log('Password must be at least 8 characters');
        return false;
    }
    if (password.length > 128) {
        console.log('Password must be less than 128 characters');
        return false;
    }
    
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumbers = false;
    let hasSpecialChars = false;
    
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        if (char >= 'a' && char <= 'z') hasLowerCase = true;
        if (char >= '0' && char <= '9') hasNumbers = true;
        if ('!@#$%^&*()_+-=[]{}|;:,.<>?'.includes(char)) hasSpecialChars = true;
    }
    
    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChars) {
        console.log('Password must contain uppercase, lowercase, numbers, and special characters');
        return false;
    }
    
    return true;
}

module.exports = { 
    processOrder, 
    calculateDiscount, 
    validateAge, 
    processTime, 
    calculateInterest, 
    validatePassword 
};
