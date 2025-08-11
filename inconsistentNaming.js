// 坏味道: 不一致的命名约定 - 混合使用不同的命名风格
function inconsistentNaming() {
    let userName = 'John';
    let user_email = 'john@example.com';
    let UserPhone = '123-456-7890';
    let user_address = '123 Main St';
    let UserCity = 'New York';
    
    console.log(userName + ' ' + user_email + ' ' + UserPhone + ' ' + user_address + ' ' + UserCity);
}

function processUserData() {
    // 混合使用驼峰命名和下划线命名
    let firstName = 'John';
    let last_name = 'Doe';
    let EmailAddress = 'john.doe@example.com';
    let phone_number = '123-456-7890';
    let HomeAddress = '123 Main St';
    let city_name = 'New York';
    let StateCode = 'NY';
    let zip_code = '10001';
    
    // 混合使用不同的变量命名风格
    let userID = '12345';
    let user_id = '12345';
    let UserId = '12345';
    let userId = '12345';
    
    console.log('User: ' + firstName + ' ' + last_name);
}

function calculateOrderTotal() {
    // 混合使用不同的常量命名风格
    const TAX_RATE = 0.08;
    const discount_rate = 0.10;
    const SHIPPING_COST = 5.99;
    const handlingCost = 2.50;
    
    let subtotal = 100.0;
    let tax = subtotal * TAX_RATE;
    let discount = subtotal * discount_rate;
    let shipping = SHIPPING_COST;
    let handling = handlingCost;
    
    let total = subtotal + tax - discount + shipping + handling;
    console.log('Total: ' + total);
}

function validateFormData() {
    // 混合使用不同的布尔变量命名风格
    let isValid = true;
    let is_valid = false;
    let Valid = true;
    let valid = false;
    
    // 混合使用不同的方法命名风格
    if (isValid) {
        console.log('Form is valid');
    }
    if (is_valid) {
        console.log('Form is also valid');
    }
    if (Valid) {
        console.log('Form is valid too');
    }
    if (valid) {
        console.log('Form is valid as well');
    }
}

class MixedNamingClass {
    constructor() {
        // 混合使用不同的字段命名风格
        this.name = '';
        this.user_name = '';
        this.UserName = '';
        this.userName = '';
    }
    
    // 混合使用不同的方法命名风格
    get_name() {
        console.log('Getting name');
    }
    
    getName() {
        console.log('Getting name');
    }
    
    GetName() {
        console.log('Getting name');
    }
    
    get_name_value() {
        console.log('Getting name value');
    }
}

// 混合使用不同的函数命名风格
function process_data() {
    console.log('Processing data');
}

function processData() {
    console.log('Processing data');
}

function ProcessData() {
    console.log('Processing data');
}

function process_data_value() {
    console.log('Processing data value');
}

module.exports = { 
    inconsistentNaming, 
    processUserData, 
    calculateOrderTotal, 
    validateFormData, 
    MixedNamingClass,
    process_data,
    processData,
    ProcessData,
    process_data_value
};
