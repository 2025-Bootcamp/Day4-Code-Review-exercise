// 坏味道: 全局变量污染 - 使用var声明全局变量
var globalVar1 = 'some value';
var globalVar2 = 'another value';
var globalVar3 = 'yet another value';

// 更多全局变量
var userName = 'John';
var userEmail = 'john@example.com';
var userPhone = '123-456-7890';
var userAddress = '123 Main St';
var userCity = 'New York';
var userCountry = 'USA';
var userZipCode = '10001';

// 全局函数
function processGlobalData() {
    console.log('Processing: ' + globalVar1 + ' ' + globalVar2 + ' ' + globalVar3);
}

function updateGlobalUser() {
    userName = 'Jane';
    userEmail = 'jane@example.com';
    userPhone = '987-654-3210';
    userAddress = '456 Oak Ave';
    userCity = 'Los Angeles';
    userCountry = 'USA';
    userZipCode = '90210';
}

function displayGlobalUser() {
    console.log('User: ' + userName);
    console.log('Email: ' + userEmail);
    console.log('Phone: ' + userPhone);
    console.log('Address: ' + userAddress + ', ' + userCity + ', ' + userCountry + ' ' + userZipCode);
}

// 全局配置对象
var config = {
    apiUrl: 'https://api.example.com',
    apiKey: 'abc123def456',
    timeout: 5000,
    retries: 3,
    debug: true
};

// 全局状态
var appState = {
    isLoggedIn: false,
    currentUser: null,
    currentPage: 'home',
    theme: 'light',
    language: 'en'
};

// 全局工具函数
var utils = {
    formatDate: function(date) {
        return date.toLocaleDateString();
    },
    formatCurrency: function(amount) {
        return '$' + amount.toFixed(2);
    },
    validateEmail: function(email) {
        return email.includes('@');
    }
};

// 全局事件处理器
var eventHandlers = {
    onUserLogin: function(user) {
        appState.isLoggedIn = true;
        appState.currentUser = user;
        console.log('User logged in: ' + user.name);
    },
    onUserLogout: function() {
        appState.isLoggedIn = false;
        appState.currentUser = null;
        console.log('User logged out');
    }
};

module.exports = { 
    processGlobalData, 
    updateGlobalUser, 
    displayGlobalUser,
    config,
    appState,
    utils,
    eventHandlers
};
