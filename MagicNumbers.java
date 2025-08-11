public class MagicNumbers {
    
    // 坏味道: 魔法数字 - 代码中直接使用数字，没有常量定义
    public void processOrder(int orderId) {
        if (orderId > 0 && orderId < 1000000) {
            if (orderId % 2 == 0) {
                System.out.println("Processing even order");
            } else {
                System.out.println("Processing odd order");
            }
            
            if (orderId > 100 && orderId < 1000) {
                System.out.println("Priority order");
            } else if (orderId > 1000 && orderId < 10000) {
                System.out.println("Standard order");
            } else if (orderId > 10000 && orderId < 100000) {
                System.out.println("Bulk order");
            } else {
                System.out.println("Special order");
            }
        }
    }
    
    public void calculateDiscount(double price) {
        if (price > 100) {
            price = price * 0.9; // 10% discount
        } else if (price > 50) {
            price = price * 0.95; // 5% discount
        } else if (price > 25) {
            price = price * 0.98; // 2% discount
        }
        System.out.println("Final price: " + price);
    }
    
    public void validateAge(int age) {
        if (age < 0 || age > 150) {
            System.out.println("Invalid age");
            return;
        }
        
        if (age < 18) {
            System.out.println("Minor");
        } else if (age < 65) {
            System.out.println("Adult");
        } else {
            System.out.println("Senior");
        }
    }
    
    public void processTime(int seconds) {
        if (seconds < 60) {
            System.out.println(seconds + " seconds");
        } else if (seconds < 3600) {
            System.out.println(seconds / 60 + " minutes");
        } else if (seconds < 86400) {
            System.out.println(seconds / 3600 + " hours");
        } else {
            System.out.println(seconds / 86400 + " days");
        }
    }
}
