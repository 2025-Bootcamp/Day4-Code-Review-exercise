public class CommentedCode {
    
    // 坏味道: 注释掉的代码 - 不再使用的代码应该被删除
    public void oldMethod() {
        // 这个方法已经不再使用，但是没有被删除
        // System.out.println("Old implementation");
        // String oldVar = "deprecated";
        // int oldNumber = 42;
        // boolean oldFlag = true;
        
        // 新的实现
        System.out.println("New implementation");
    }
    
    public void processData(String data) {
        // 旧的验证逻辑
        // if (data == null) {
        //     return;
        // }
        // if (data.length() < 5) {
        //     return;
        // }
        // if (data.contains("test")) {
        //     return;
        // }
        
        // 新的验证逻辑
        if (data == null || data.length() < 5 || data.contains("test")) {
            return;
        }
        
        System.out.println("Processing: " + data);
    }
    
    public void calculateTax(double income) {
        // 旧的税率计算
        // double tax = 0;
        // if (income <= 30000) {
        //     tax = income * 0.1;
        // } else if (income <= 60000) {
        //     tax = 30000 * 0.1 + (income - 30000) * 0.2;
        // } else {
        //     tax = 30000 * 0.1 + 30000 * 0.2 + (income - 60000) * 0.3;
        // }
        
        // 新的税率计算
        double tax = 0;
        if (income <= 50000) {
            tax = income * 0.15;
        } else if (income <= 100000) {
            tax = 50000 * 0.15 + (income - 50000) * 0.25;
        } else {
            tax = 50000 * 0.15 + 50000 * 0.25 + (income - 100000) * 0.35;
        }
        
        System.out.println("Tax: " + tax);
    }
    
    public void sendEmail(String to, String subject, String body) {
        // 旧的邮件发送逻辑
        // String smtpServer = "smtp.oldserver.com";
        // String smtpPort = "25";
        // String username = "olduser@company.com";
        // String password = "oldpassword";
        
        // 新的邮件发送逻辑
        String smtpServer = "smtp.gmail.com";
        String smtpPort = "587";
        String username = "admin@company.com";
        String password = "password123";
        
        System.out.println("Sending email via " + smtpServer);
    }
    
    public void validateUser(String username, String password) {
        // 旧的验证逻辑
        // if (username == null || username.trim().isEmpty()) {
        //     System.out.println("Username is required");
        //     return false;
        // }
        // if (password == null || password.trim().isEmpty()) {
        //     System.out.println("Password is required");
        //     return false;
        // }
        // if (username.length() < 3) {
        //     System.out.println("Username must be at least 3 characters");
        //     return false;
        // }
        // if (password.length() < 6) {
        //     System.out.println("Password must be at least 6 characters");
        //     return false;
        // }
        
        // 新的验证逻辑
        if (username == null || username.trim().isEmpty() || username.length() < 3) {
            System.out.println("Invalid username");
            return;
        }
        if (password == null || password.trim().isEmpty() || password.length() < 6) {
            System.out.println("Invalid password");
            return;
        }
        
        System.out.println("User validation successful");
    }
}
