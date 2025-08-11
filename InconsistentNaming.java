public class InconsistentNaming {
    
    // 坏味道: 不一致的命名约定 - 混合使用不同的命名风格
    public void inconsistentNaming() {
        String userName = "John";
        String user_email = "john@example.com";
        String UserPhone = "123-456-7890";
        String user_address = "123 Main St";
        String UserCity = "New York";
        
        System.out.println(userName + " " + user_email + " " + UserPhone + " " + user_address + " " + UserCity);
    }
    
    public void processUserData() {
        // 混合使用驼峰命名和下划线命名
        String firstName = "John";
        String last_name = "Doe";
        String EmailAddress = "john.doe@example.com";
        String phone_number = "123-456-7890";
        String HomeAddress = "123 Main St";
        String city_name = "New York";
        String StateCode = "NY";
        String zip_code = "10001";
        
        // 混合使用不同的变量命名风格
        String userID = "12345";
        String user_id = "12345";
        String UserId = "12345";
        String userId = "12345";
        
        System.out.println("User: " + firstName + " " + last_name);
    }
    
    public void calculateOrderTotal() {
        // 混合使用不同的常量命名风格
        final double TAX_RATE = 0.08;
        final double discount_rate = 0.10;
        final double SHIPPING_COST = 5.99;
        final double handlingCost = 2.50;
        
        double subtotal = 100.0;
        double tax = subtotal * TAX_RATE;
        double discount = subtotal * discount_rate;
        double shipping = SHIPPING_COST;
        double handling = handlingCost;
        
        double total = subtotal + tax - discount + shipping + handling;
        System.out.println("Total: " + total);
    }
    
    public void validateFormData() {
        // 混合使用不同的布尔变量命名风格
        boolean isValid = true;
        boolean is_valid = false;
        boolean Valid = true;
        boolean valid = false;
        
        // 混合使用不同的方法命名风格
        if (isValid) {
            System.out.println("Form is valid");
        }
        if (is_valid) {
            System.out.println("Form is also valid");
        }
        if (Valid) {
            System.out.println("Form is valid too");
        }
        if (valid) {
            System.out.println("Form is valid as well");
        }
    }
    
    public class MixedNamingClass {
        // 混合使用不同的字段命名风格
        public String name;
        public String user_name;
        public String UserName;
        public String userName;
        
        // 混合使用不同的方法命名风格
        public void get_name() {
            System.out.println("Getting name");
        }
        
        public void getName() {
            System.out.println("Getting name");
        }
        
        public void GetName() {
            System.out.println("Getting name");
        }
        
        public void get_name_value() {
            System.out.println("Getting name value");
        }
    }
}
