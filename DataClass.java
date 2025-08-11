public class DataClass {
    
    // 坏味道: 数据类 - 只有数据字段，没有行为
    public class UserData {
        public String name;
        public String email;
        public String phone;
        public String address;
        public String city;
        public String country;
        public String zipCode;
        public String company;
        public String department;
        public String position;
        public String salary;
        public String hireDate;
        public String manager;
        public String project;
        public String skills;
        public String education;
        public String experience;
        public String certifications;
        public String languages;
        public String hobbies;
        public String emergencyContact;
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
    
    public class OrderData {
        public String orderId;
        public String customerId;
        public String productId;
        public int quantity;
        public double unitPrice;
        public double totalPrice;
        public double taxRate;
        public double taxAmount;
        public double discountRate;
        public double discountAmount;
        public String shippingAddress;
        public String billingAddress;
        public String paymentMethod;
        public String status;
        public String orderDate;
        public String expectedDelivery;
        public String actualDelivery;
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
    
    public class ProductData {
        public String productId;
        public String name;
        public String description;
        public String category;
        public String brand;
        public double price;
        public int stockQuantity;
        public String supplier;
        public String manufacturer;
        public String model;
        public String color;
        public String size;
        public double weight;
        public String dimensions;
        public String warranty;
        public String returnPolicy;
        
        // 没有getter/setter方法
        // 没有业务逻辑方法
    }
}
