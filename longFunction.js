// 坏味道: 过长函数 (超过50行)
function processUserData(name, email, phone, address, city, country, zipCode, company, department, position, salary, hireDate, manager, project, skills, education, experience, certifications, languages, hobbies, emergencyContact) {
    // 验证输入
    if (!name || name.trim() === '') {
        console.log('Name is required');
        return;
    }
    if (!email || email.trim() === '') {
        console.log('Email is required');
        return;
    }
    if (!phone || phone.trim() === '') {
        console.log('Phone is required');
        return;
    }
    if (!address || address.trim() === '') {
        console.log('Address is required');
        return;
    }
    if (!city || city.trim() === '') {
        console.log('City is required');
        return;
    }
    if (!country || country.trim() === '') {
        console.log('Country is required');
        return;
    }
    if (!zipCode || zipCode.trim() === '') {
        console.log('Zip code is required');
        return;
    }
    if (!company || company.trim() === '') {
        console.log('Company is required');
        return;
    }
    if (!department || department.trim() === '') {
        console.log('Department is required');
        return;
    }
    if (!position || position.trim() === '') {
        console.log('Position is required');
        return;
    }
    if (!salary || salary.trim() === '') {
        console.log('Salary is required');
        return;
    }
    if (!hireDate || hireDate.trim() === '') {
        console.log('Hire date is required');
        return;
    }
    if (!manager || manager.trim() === '') {
        console.log('Manager is required');
        return;
    }
    if (!project || project.trim() === '') {
        console.log('Project is required');
        return;
    }
    if (!skills || skills.trim() === '') {
        console.log('Skills are required');
        return;
    }
    if (!education || education.trim() === '') {
        console.log('Education is required');
        return;
    }
    if (!experience || experience.trim() === '') {
        console.log('Experience is required');
        return;
    }
    if (!certifications || certifications.trim() === '') {
        console.log('Certifications are required');
        return;
    }
    if (!languages || languages.trim() === '') {
        console.log('Languages are required');
        return;
    }
    if (!hobbies || hobbies.trim() === '') {
        console.log('Hobbies are required');
        return;
    }
    if (!emergencyContact || emergencyContact.trim() === '') {
        console.log('Emergency contact is required');
        return;
    }
    
    // 处理数据
    console.log('Processing user: ' + name);
    console.log('Email: ' + email);
    console.log('Phone: ' + phone);
    console.log('Address: ' + address + ', ' + city + ', ' + country + ' ' + zipCode);
    console.log('Company: ' + company + ' - ' + department + ' - ' + position);
    console.log('Salary: ' + salary);
    console.log('Hire Date: ' + hireDate);
    console.log('Manager: ' + manager);
    console.log('Project: ' + project);
    console.log('Skills: ' + skills);
    console.log('Education: ' + education);
    console.log('Experience: ' + experience);
    console.log('Certifications: ' + certifications);
    console.log('Languages: ' + languages);
    console.log('Hobbies: ' + hobbies);
    console.log('Emergency Contact: ' + emergencyContact);
    
    // 保存到数据库
    saveToDatabase(name, email, phone, address, city, country, zipCode, company, department, position, salary, hireDate, manager, project, skills, education, experience, certifications, languages, hobbies, emergencyContact);
}

// 辅助函数
function saveToDatabase(...params) {
    // 数据库保存逻辑
    console.log('Saving to database...');
}

module.exports = { processUserData };
