// 坏味道: 命名不当 - 使用单字母变量名和缩写
function doStuff(s, i, b, l, m) {
    if (b) {
        for (let item of l) {
            if (item.length > i) {
                m[item] = s + '_' + i;
            }
        }
    }
}

// 更多命名不当的例子
function processData(str, num, flag, lst, map) {
    if (flag) {
        for (let elem of lst) {
            if (elem.length > num) {
                map[elem] = str + '_' + num;
            }
        }
    }
}

function calc(n, a, t, items, data) {
    if (t) {
        for (let i of items) {
            if (i.length > a) {
                data[i] = n + '_' + a;
            }
        }
    }
}

// 方法名不清晰
function func1() {
    console.log('Doing something');
}

function func2() {
    console.log('Doing something else');
}

function func3() {
    console.log('Doing another thing');
}

// 变量名不清晰
function processUser(u, e, p, a, c) {
    let temp = u + ' ' + e + ' ' + p + ' ' + a + ' ' + c;
    console.log(temp);
}

// 类名不清晰
class Data {
    constructor() {
        this.f1 = '';
        this.f2 = '';
        this.f3 = '';
        this.f4 = '';
        this.f5 = '';
    }
}

// 更多糟糕的命名
function x() {
    let y = 1;
    let z = 2;
    let w = y + z;
    console.log(w);
}

function a(b, c) {
    let d = b + c;
    let e = d * 2;
    let f = e / 3;
    return f;
}

function process(x, y, z) {
    let result = 0;
    if (x > 0) {
        result = x + y;
    } else {
        result = x - z;
    }
    return result;
}

module.exports = { 
    doStuff, 
    processData, 
    calc, 
    func1, 
    func2, 
    func3, 
    processUser, 
    Data, 
    x, 
    a, 
    process 
};
