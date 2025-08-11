// 坏味道: 过深的嵌套 (超过3层)
function processNestedData(data) {
    for (let level1 of data) {
        for (let level2 of level1) {
            for (let level3 of level2) {
                for (let item of level3) {
                    if (item != null) {
                        if (item.length > 0) {
                            if (item.startsWith('A')) {
                                if (item.endsWith('Z')) {
                                    if (item.includes('test')) {
                                        console.log('Found special item: ' + item);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function processUserOrders(users, userOrders, orderDetails) {
    for (let user of users) {
        if (user != null) {
            if (userOrders.hasOwnProperty(user)) {
                let orders = userOrders[user];
                if (orders != null) {
                    for (let order of orders) {
                        if (order != null) {
                            if (orderDetails.hasOwnProperty(order)) {
                                let details = orderDetails[order];
                                if (details != null) {
                                    if (details.hasOwnProperty('status')) {
                                        let status = details['status'];
                                        if (status != null) {
                                            if (status === 'pending') {
                                                if (details.hasOwnProperty('amount')) {
                                                    let amount = details['amount'];
                                                    if (amount != null) {
                                                        if (amount > 100.0) {
                                                            console.log('High value pending order: ' + order);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function validateComplexData(data, requiredFields, validationRules) {
    if (data != null) {
        if (Object.keys(data).length > 0) {
            for (let field of requiredFields) {
                if (field != null) {
                    if (data.hasOwnProperty(field)) {
                        let value = data[field];
                        if (value != null) {
                            if (validationRules.hasOwnProperty(field)) {
                                let rule = validationRules[field];
                                if (rule != null) {
                                    if (typeof rule === 'string') {
                                        let stringRule = rule;
                                        if (stringRule === 'required') {
                                            if (typeof value === 'string') {
                                                let stringValue = value;
                                                if (stringValue.trim() === '') {
                                                    console.log('Field ' + field + ' is required');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function processNestedConfiguration(config) {
    if (config != null) {
        if (config.hasOwnProperty('database')) {
            let dbConfig = config.database;
            if (dbConfig != null) {
                if (dbConfig.hasOwnProperty('connections')) {
                    let connections = dbConfig.connections;
                    if (connections != null) {
                        if (connections.hasOwnProperty('default')) {
                            let defaultConn = connections.default;
                            if (defaultConn != null) {
                                if (defaultConn.hasOwnProperty('host')) {
                                    let host = defaultConn.host;
                                    if (host != null) {
                                        if (host === 'localhost') {
                                            if (defaultConn.hasOwnProperty('port')) {
                                                let port = defaultConn.port;
                                                if (port != null) {
                                                    if (port === 3306) {
                                                        console.log('Using local MySQL database');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = { 
    processNestedData, 
    processUserOrders, 
    validateComplexData, 
    processNestedConfiguration 
};
