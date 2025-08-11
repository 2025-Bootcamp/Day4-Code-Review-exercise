public class LongMethod {
    
    // 坏味道: 过长方法 (超过50行)
    public void processUserData(String name, String email, String phone, String address, String city, String country, String zipCode, String company, String department, String position, String salary, String hireDate, String manager, String project, String skills, String education, String experience, String certifications, String languages, String hobbies, String emergencyContact) {
        // 验证输入
        if (name == null || name.trim().isEmpty()) {
            System.out.println("Name is required");
            return;
        }
        if (email == null || email.trim().isEmpty()) {
            System.out.println("Email is required");
            return;
        }
        if (phone == null || phone.trim().isEmpty()) {
            System.out.println("Phone is required");
            return;
        }
        if (address == null || address.trim().isEmpty()) {
            System.out.println("Address is required");
            return;
        }
        if (city == null || city.trim().isEmpty()) {
            System.out.println("City is required");
            return;
        }
        if (country == null || country.trim().isEmpty()) {
            System.out.println("Country is required");
            return;
        }
        if (zipCode == null || zipCode.trim().isEmpty()) {
            System.out.println("Zip code is required");
            return;
        }
        if (company == null || company.trim().isEmpty()) {
            System.out.println("Company is required");
            return;
        }
        if (department == null || department.trim().isEmpty()) {
            System.out.println("Department is required");
            return;
        }
        if (position == null || position.trim().isEmpty()) {
            System.out.println("Position is required");
            return;
        }
        if (salary == null || salary.trim().isEmpty()) {
            System.out.println("Salary is required");
            return;
        }
        if (hireDate == null || hireDate.trim().isEmpty()) {
            System.out.println("Hire date is required");
            return;
        }
        if (manager == null || manager.trim().isEmpty()) {
            System.out.println("Manager is required");
            return;
        }
        if (project == null || project.trim().isEmpty()) {
            System.out.println("Project is required");
            return;
        }
        if (skills == null || skills.trim().isEmpty()) {
            System.out.println("Skills are required");
            return;
        }
        if (education == null || education.trim().isEmpty()) {
            System.out.println("Education is required");
            return;
        }
        if (experience == null || experience.trim().isEmpty()) {
            System.out.println("Experience is required");
            return;
        }
        if (certifications == null || certifications.trim().isEmpty()) {
            System.out.println("Certifications are required");
            return;
        }
        if (languages == null || languages.trim().isEmpty()) {
            System.out.println("Languages are required");
            return;
        }
        if (hobbies == null || hobbies.trim().isEmpty()) {
            System.out.println("Hobbies are required");
            return;
        }
        if (emergencyContact == null || emergencyContact.trim().isEmpty()) {
            System.out.println("Emergency contact is required");
            return;
        }
        
        // 处理数据
        System.out.println("Processing user: " + name);
        System.out.println("Email: " + email);
        System.out.println("Phone: " + phone);
        System.out.println("Address: " + address + ", " + city + ", " + country + " " + zipCode);
        System.out.println("Company: " + company + " - " + department + " - " + position);
        System.out.println("Salary: " + salary);
        System.out.println("Hire Date: " + hireDate);
        System.out.println("Manager: " + manager);
        System.out.println("Project: " + project);
        System.out.println("Skills: " + skills);
        System.out.println("Education: " + education);
        System.out.println("Experience: " + experience);
        System.out.println("Certifications: " + certifications);
        System.out.println("Languages: " + languages);
        System.out.println("Hobbies: " + hobbies);
        System.out.println("Emergency Contact: " + emergencyContact);
        
        // 保存到数据库
        saveToDatabase(name, email, phone, address, city, country, zipCode, company, department, position, salary, hireDate, manager, project, skills, education, experience, certifications, languages, hobbies, emergencyContact);
    }
    
    private void saveToDatabase(String... params) {
        System.out.println("Saving to database...");
    }
}
