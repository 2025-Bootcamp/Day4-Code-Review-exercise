// 坏味道: 不一致的代码风格 - 混合使用不同的代码风格
function mixedStyle() {
    let x=1;
    let y = 2;
    let z= 3;
    let w =4;
    
    if(x>0){
        console.log('x is positive');
    }
    if (y > 0) {
        console.log('y is positive');
    }
    if(z >0){
        console.log('z is positive');
    }
    if (w> 0) {
        console.log('w is positive');
    }
}

function inconsistentSpacing() {
    let a=1;
    let b= 2;
    let c =3;
    let d = 4;
    
    if(a==b){
        console.log('a equals b');
    }
    if (c==d) {
        console.log('c equals d');
    }
    if(a ==b){
        console.log('a equals b');
    }
    if (c== d) {
        console.log('c equals d');
    }
}

function inconsistentBrackets() {
    let x = 1;
    let y = 2;
    
    if (x > 0) {
        console.log('x is positive');
    }
    if (y > 0)
    {
        console.log('y is positive');
    }
    if (x === y)
        console.log('x equals y');
    else {
        console.log('x does not equal y');
    }
}

function inconsistentQuotes() {
    let name = "John";
    let email = 'john@example.com';
    let phone = "123-456-7890";
    let address = '123 Main St';
    let city = "New York";
    let country = 'USA';
    
    console.log("Name: " + name);
    console.log('Email: ' + email);
    console.log("Phone: " + phone);
    console.log('Address: ' + address);
    console.log("City: " + city);
    console.log('Country: ' + country);
}

function inconsistentSemicolons() {
    let x = 1;
    let y = 2;
    let z = 3
    
    if (x > 0) {
        console.log('x is positive');
    }
    
    if (y > 0) {
        console.log('y is positive')
    }
    
    if (z > 0) {
        console.log('z is positive');
    }
}

function inconsistentFunctionStyle() {
    // 函数声明
    function func1() {
        console.log('Function 1');
    }
    
    // 函数表达式
    let func2 = function() {
        console.log('Function 2');
    };
    
    // 箭头函数
    let func3 = () => {
        console.log('Function 3');
    };
    
    // 立即执行函数
    (function() {
        console.log('Function 4');
    })();
    
    // 箭头函数简写
    let func5 = () => console.log('Function 5');
    
    func1();
    func2();
    func3();
    func5();
}

function inconsistentVariableDeclaration() {
    var oldVar = 'old style';
    let newLet = 'new style';
    const newConst = 'constant style';
    
    if (true) {
        var blockVar = 'block scoped var';
        let blockLet = 'block scoped let';
        const blockConst = 'block scoped const';
    }
    
    console.log(oldVar);
    console.log(newLet);
    console.log(newConst);
    console.log(blockVar); // var is function scoped
    // console.log(blockLet); // let is block scoped
    // console.log(blockConst); // const is block scoped
}

function inconsistentLoopStyle() {
    let arr = [1, 2, 3, 4, 5];
    
    // for loop
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
    // for...of loop
    for (let item of arr) {
        console.log(item);
    }
    
    // forEach
    arr.forEach(function(item) {
        console.log(item);
    });
    
    // forEach with arrow function
    arr.forEach((item) => {
        console.log(item);
    });
    
    // forEach with arrow function and single parameter
    arr.forEach(item => {
        console.log(item);
    });
}

module.exports = { 
    mixedStyle, 
    inconsistentSpacing, 
    inconsistentBrackets, 
    inconsistentQuotes, 
    inconsistentSemicolons, 
    inconsistentFunctionStyle, 
    inconsistentVariableDeclaration, 
    inconsistentLoopStyle 
};
