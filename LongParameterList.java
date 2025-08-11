public class LongParameterList {
    
    // 坏味道: 过长的参数列表 (超过5个参数)
    public void createUser(String firstName, String lastName, String email, String phone, String address, String city, String state, String zipCode, String country, String dateOfBirth, String socialSecurityNumber, String driverLicenseNumber, String passportNumber, String emergencyContactName, String emergencyContactPhone, String emergencyContactRelationship, String medicalConditions, String allergies, String medications, String insuranceProvider, String insurancePolicyNumber, String bankAccountNumber, String routingNumber, String creditCardNumber, String creditCardExpiry, String creditCardCVV) {
        System.out.println("Creating user with " + firstName + " " + lastName);
        // 方法体...
    }
    
    public void processOrder(String orderId, String customerId, String productId, String quantity, String unitPrice, String totalPrice, String taxRate, String taxAmount, String discountRate, String discountAmount, String shippingAddress, String billingAddress, String paymentMethod, String cardNumber, String cardExpiry, String cardCVV, String shippingMethod, String trackingNumber, String orderDate, String expectedDelivery, String actualDelivery, String status, String notes, String createdBy, String updatedBy, String createdAt, String updatedAt) {
        System.out.println("Processing order " + orderId);
        // 方法体...
    }
    
    public void sendEmail(String to, String cc, String bcc, String subject, String body, String attachmentPath, String attachmentName, String attachmentType, String priority, String replyTo, String from, String signature, String template, String language, String encoding, String charset, String format, String timezone, String scheduledTime, String expirationTime, String trackingId) {
        System.out.println("Sending email to " + to);
        // 方法体...
    }
    
    public void validateForm(String username, String password, String confirmPassword, String email, String confirmEmail, String firstName, String middleName, String lastName, String dateOfBirth, String gender, String phone, String mobile, String address, String city, String state, String zipCode, String country, String occupation, String company, String website, String bio, String interests, String skills, String education, String experience, String certifications, String languages, String timezone, String locale, String currency, String termsAccepted, String privacyAccepted, String marketingAccepted) {
        System.out.println("Validating form for " + username);
        // 方法体...
    }
}
