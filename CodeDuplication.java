public class CodeDuplication {
    
    // 坏味道: 代码重复 - 两个几乎相同的方法
    public void calculateTax1(double income) {
        double tax = 0;
        if (income <= 50000) {
            tax = income * 0.15;
        } else if (income <= 100000) {
            tax = 50000 * 0.15 + (income - 50000) * 0.25;
        } else if (income <= 150000) {
            tax = 50000 * 0.15 + 50000 * 0.25 + (income - 100000) * 0.35;
        } else {
            tax = 50000 * 0.15 + 50000 * 0.25 + 50000 * 0.35 + (income - 150000) * 0.45;
        }
        System.out.println("Tax: " + tax);
    }
    
    public void calculateTax2(double income) {
        double tax = 0;
        if (income <= 50000) {
            tax = income * 0.15;
        } else if (income <= 100000) {
            tax = 50000 * 0.15 + (income - 50000) * 0.25;
        } else if (income <= 150000) {
            tax = 50000 * 0.15 + 50000 * 0.25 + (income - 100000) * 0.35;
        } else {
            tax = 50000 * 0.15 + 50000 * 0.25 + 50000 * 0.35 + (income - 150000) * 0.45;
        }
        System.out.println("Tax: " + tax);
    }
    
    // 更多重复代码
    public void validateEmail1(String email) {
        if (email == null || email.trim().isEmpty()) {
            System.out.println("Email is required");
            return;
        }
        if (!email.contains("@")) {
            System.out.println("Email must contain @");
            return;
        }
        if (!email.contains(".")) {
            System.out.println("Email must contain domain");
            return;
        }
        System.out.println("Email is valid");
    }
    
    public void validateEmail2(String email) {
        if (email == null || email.trim().isEmpty()) {
            System.out.println("Email is required");
            return;
        }
        if (!email.contains("@")) {
            System.out.println("Email must contain @");
            return;
        }
        if (!email.contains(".")) {
            System.out.println("Email must contain domain");
            return;
        }
        System.out.println("Email is valid");
    }
}
