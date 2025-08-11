public class HardcodedStrings {
    
    // 坏味道: 硬编码字符串 - 字符串应该定义为常量或配置
    public void sendEmail(String to, String subject, String body) {
        String smtpServer = "smtp.gmail.com";
        String smtpPort = "587";
        String username = "admin@company.com";
        String password = "password123";
        String fromAddress = "noreply@company.com";
        String companyName = "My Company";
        String supportEmail = "support@company.com";
        String website = "www.company.com";
        
        // 发送邮件逻辑...
        System.out.println("Sending email from " + fromAddress + " to " + to);
    }
    
    public void validateUser(String username, String password) {
        if (username == null || username.trim().isEmpty()) {
            System.out.println("Username is required");
            return;
        }
        if (username.length() < 3) {
            System.out.println("Username must be at least 3 characters");
            return;
        }
        if (username.length() > 20) {
            System.out.println("Username must be less than 20 characters");
            return;
        }
        if (password == null || password.trim().isEmpty()) {
            System.out.println("Password is required");
            return;
        }
        if (password.length() < 6) {
            System.out.println("Password must be at least 6 characters");
            return;
        }
        if (password.length() > 50) {
            System.out.println("Password must be less than 50 characters");
            return;
        }
        
        System.out.println("User validation successful");
    }
    
    public void processOrder(String orderId) {
        if (orderId.startsWith("ORD")) {
            System.out.println("Processing order");
        } else if (orderId.startsWith("INV")) {
            System.out.println("Processing invoice");
        } else if (orderId.startsWith("REF")) {
            System.out.println("Processing refund");
        } else {
            System.out.println("Unknown order type");
        }
        
        if (orderId.length() == 10) {
            System.out.println("Standard order");
        } else if (orderId.length() == 12) {
            System.out.println("Priority order");
        } else if (orderId.length() == 15) {
            System.out.println("Express order");
        } else {
            System.out.println("Invalid order ID length");
        }
    }
    
    public void calculateTax(String country, double amount) {
        if (country.equals("US")) {
            if (amount > 0 && amount <= 10000) {
                System.out.println("Tax rate: 10%");
            } else if (amount > 10000 && amount <= 50000) {
                System.out.println("Tax rate: 15%");
            } else if (amount > 50000 && amount <= 100000) {
                System.out.println("Tax rate: 20%");
            } else {
                System.out.println("Tax rate: 25%");
            }
        } else if (country.equals("CA")) {
            if (amount > 0 && amount <= 15000) {
                System.out.println("Tax rate: 12%");
            } else if (amount > 15000 && amount <= 75000) {
                System.out.println("Tax rate: 18%");
            } else {
                System.out.println("Tax rate: 22%");
            }
        } else if (country.equals("UK")) {
            if (amount > 0 && amount <= 12500) {
                System.out.println("Tax rate: 0%");
            } else if (amount > 12500 && amount <= 50000) {
                System.out.println("Tax rate: 20%");
            } else if (amount > 50000 && amount <= 150000) {
                System.out.println("Tax rate: 40%");
            } else {
                System.out.println("Tax rate: 45%");
            }
        } else {
            System.out.println("Unknown country");
        }
    }
    
    public void displayError(String errorCode) {
        switch (errorCode) {
            case "E001":
                System.out.println("Invalid username or password");
                break;
            case "E002":
                System.out.println("User account is locked");
                break;
            case "E003":
                System.out.println("Session has expired");
                break;
            case "E004":
                System.out.println("Access denied");
                break;
            case "E005":
                System.out.println("System maintenance in progress");
                break;
            default:
                System.out.println("Unknown error occurred");
                break;
        }
    }
}
