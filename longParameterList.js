// 坏味道: 过长的参数列表 (超过5个参数)
function createUser(firstName, lastName, email, phone, address, city, state, zipCode, country, dateOfBirth, socialSecurityNumber, driverLicenseNumber, passportNumber, emergencyContactName, emergencyContactPhone, emergencyContactRelationship, medicalConditions, allergies, medications, insuranceProvider, insurancePolicyNumber, bankAccountNumber, routingNumber, creditCardNumber, creditCardExpiry, creditCardCVV) {
    console.log('Creating user with ' + firstName + ' ' + lastName);
    // 函数体...
}

function processOrder(orderId, customerId, productId, quantity, unitPrice, totalPrice, taxRate, taxAmount, discountRate, discountAmount, shippingAddress, billingAddress, paymentMethod, cardNumber, cardExpiry, cardCVV, shippingMethod, trackingNumber, orderDate, expectedDelivery, actualDelivery, status, notes, createdBy, updatedBy, createdAt, updatedAt) {
    console.log('Processing order ' + orderId);
    // 函数体...
}

function sendEmail(to, cc, bcc, subject, body, attachmentPath, attachmentName, attachmentType, priority, replyTo, from, signature, template, language, encoding, charset, format, timezone, scheduledTime, expirationTime, trackingId) {
    console.log('Sending email to ' + to);
    // 函数体...
}

function validateForm(username, password, confirmPassword, email, confirmEmail, firstName, middleName, lastName, dateOfBirth, gender, phone, mobile, address, city, state, zipCode, country, occupation, company, website, bio, interests, skills, education, experience, certifications, languages, timezone, locale, currency, termsAccepted, privacyAccepted, marketingAccepted) {
    console.log('Validating form for ' + username);
    // 函数体...
}

function createProduct(name, description, category, brand, price, cost, sku, barcode, weight, dimensions, color, size, material, manufacturer, supplier, warranty, returnPolicy, shippingClass, taxClass, status, isActive, isFeatured, isOnSale, salePrice, saleStartDate, saleEndDate, inventory, reorderPoint, maxStock, minStock, unit, packageSize, packageWeight, packageDimensions, countryOfOrigin, certifications, safetyWarnings, ingredients, allergens, nutritionalInfo, instructions, tags, metaTitle, metaDescription, metaKeywords, seoUrl, canonicalUrl, redirectUrl, customFields) {
    console.log('Creating product: ' + name);
    // 函数体...
}

module.exports = { 
    createUser, 
    processOrder, 
    sendEmail, 
    validateForm, 
    createProduct 
};
