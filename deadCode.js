// 坏味道: 死代码 - 永远不会执行的代码
function deadCode() {
    let result = calculateSomething();
    
    if (false) { // 永远不会执行
        console.log('This will never be printed');
        let unusedVar = 'unused';
        let anotherUnusedVar = 42;
    }
    
    if (result > 100) {
        console.log('Result is high');
    } else if (result > 50) {
        console.log('Result is medium');
    } else if (result > 0) {
        console.log('Result is low');
    } else {
        console.log('Result is negative');
        return; // 后面的代码永远不会执行
    }
    
    console.log('This will never be reached if result <= 0');
}

function calculateSomething() {
    return Math.random() * 200 - 100;
}

// 更多死代码的例子
function processUser(user) {
    if (user == null) {
        return;
    }
    
    if (user.active === false) {
        return;
    }
    
    if (user.verified === false) {
        return;
    }
    
    if (user.subscription === 'expired') {
        return;
    }
    
    // 这些代码永远不会执行，因为前面的条件已经覆盖了所有情况
    if (user.active === true && user.verified === true && user.subscription !== 'expired') {
        console.log('Processing user...');
        // 处理用户逻辑
    }
}

function validateInput(input) {
    if (input == null) {
        console.log('Input is null');
        return false;
    }
    
    if (input.trim() === '') {
        console.log('Input is empty');
        return false;
    }
    
    if (input.length < 3) {
        console.log('Input is too short');
        return false;
    }
    
    if (input.length > 100) {
        console.log('Input is too long');
        return false;
    }
    
    // 这个条件永远不会为真，因为前面的条件已经处理了所有无效情况
    if (input == null || input.trim() === '' || input.length < 3 || input.length > 100) {
        console.log('Input validation failed');
        return false;
    }
    
    return true;
}

function calculateDiscount(price, customerType) {
    let discount = 0;
    
    if (customerType === 'vip') {
        discount = 0.20;
    } else if (customerType === 'regular') {
        discount = 0.10;
    } else if (customerType === 'new') {
        discount = 0.05;
    } else {
        discount = 0.00;
    }
    
    // 这些代码永远不会执行，因为上面的if-else已经覆盖了所有情况
    if (customerType === 'vip' || customerType === 'regular' || customerType === 'new') {
        discount = 0.15; // 这个赋值永远不会生效
    }
    
    if (customerType !== 'vip' && customerType !== 'regular' && customerType !== 'new') {
        discount = 0.00; // 这个赋值永远不会生效
    }
    
    return price * (1 - discount);
}

function processOrder(order) {
    // 永远不会执行的代码
    if (order.status === 'cancelled') {
        console.log('Processing cancelled order');
        // 处理取消订单的逻辑
    }
    
    // 永远不会执行的代码
    if (order.status === 'refunded') {
        console.log('Processing refunded order');
        // 处理退款订单的逻辑
    }
    
    // 永远不会执行的代码
    if (order.status === 'shipped' && order.deliveryDate < new Date()) {
        console.log('Order is overdue');
        // 处理逾期订单的逻辑
    }
    
    // 实际执行的代码
    if (order.status === 'pending') {
        console.log('Processing pending order');
        // 处理待处理订单的逻辑
    } else if (order.status === 'confirmed') {
        console.log('Processing confirmed order');
        // 处理已确认订单的逻辑
    } else if (order.status === 'processing') {
        console.log('Processing order');
        // 处理订单的逻辑
    }
}

function unusedVariables() {
    let x = 1;
    let y = 2;
    let z = 3;
    let w = 4;
    let v = 5;
    
    // 只使用了x和y，其他变量从未使用
    console.log('Sum: ' + (x + y));
    
    // 这些变量永远不会被使用
    // z, w, v 都是死代码
}

function unreachableCode() {
    console.log('This will be printed');
    
    return;
    
    // 这些代码永远不会执行
    console.log('This will never be printed');
    let unusedVar = 'unused';
    let anotherUnusedVar = 42;
    
    if (true) {
        console.log('This will never be printed either');
    }
}

module.exports = { 
    deadCode, 
    processUser, 
    validateInput, 
    calculateDiscount, 
    processOrder, 
    unusedVariables, 
    unreachableCode 
};
