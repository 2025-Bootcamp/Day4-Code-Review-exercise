// 坏味道: 数据类 - 只有数据字段，没有行为
class UserData {
    constructor() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.country = '';
        this.zipCode = '';
        this.company = '';
        this.department = '';
        this.position = '';
        this.salary = '';
        this.hireDate = '';
        this.manager = '';
        this.project = '';
        this.skills = '';
        this.education = '';
        this.experience = '';
        this.certifications = '';
        this.languages = '';
        this.hobbies = '';
        this.emergencyContact = '';
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
}

class OrderData {
    constructor() {
        this.orderId = '';
        this.customerId = '';
        this.productId = '';
        this.quantity = 0;
        this.unitPrice = 0.0;
        this.totalPrice = 0.0;
        this.taxRate = 0.0;
        this.taxAmount = 0.0;
        this.discountRate = 0.0;
        this.discountAmount = 0.0;
        this.shippingAddress = '';
        this.billingAddress = '';
        this.paymentMethod = '';
        this.status = '';
        this.orderDate = '';
        this.expectedDelivery = '';
        this.actualDelivery = '';
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
}

class ProductData {
    constructor() {
        this.productId = '';
        this.name = '';
        this.description = '';
        this.category = '';
        this.brand = '';
        this.price = 0.0;
        this.stockQuantity = 0;
        this.supplier = '';
        this.manufacturer = '';
        this.model = '';
        this.color = '';
        this.size = '';
        this.weight = 0.0;
        this.dimensions = '';
        this.warranty = '';
        this.returnPolicy = '';
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
}

class CustomerData {
    constructor() {
        this.customerId = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.country = '';
        this.dateOfBirth = '';
        this.gender = '';
        this.occupation = '';
        this.company = '';
        this.website = '';
        this.bio = '';
        this.interests = '';
        this.skills = '';
        this.education = '';
        this.experience = '';
        this.certifications = '';
        this.languages = '';
        this.timezone = '';
        this.locale = '';
        this.currency = '';
        this.termsAccepted = false;
        this.privacyAccepted = false;
        this.marketingAccepted = false;
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
}

module.exports = { 
    UserData, 
    OrderData, 
    ProductData, 
    CustomerData 
};
