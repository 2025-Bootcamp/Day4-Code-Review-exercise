// 坏味道: 回调地狱 - 多层嵌套的回调函数
function processData(data, callback) {
    fetch('/api/process', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).then(result => {
        if (result.success) {
            fetch('/api/validate', {
                method: 'POST',
                body: JSON.stringify(result)
            }).then(response => {
                return response.json();
            }).then(validationResult => {
                if (validationResult.valid) {
                    fetch('/api/save', {
                        method: 'POST',
                        body: JSON.stringify(validationResult)
                    }).then(response => {
                        return response.json();
                    }).then(saveResult => {
                        if (saveResult.saved) {
                            callback(null, saveResult);
                        } else {
                            callback(new Error('Save failed'));
                        }
                    }).catch(error => {
                        callback(error);
                    });
                } else {
                    callback(new Error('Validation failed'));
                }
            }).catch(error => {
                callback(error);
            });
        } else {
            callback(new Error('Processing failed'));
        }
    }).catch(error => {
        callback(error);
    });
}

// 更多回调地狱的例子
function createUserAndSendEmail(userData, callback) {
    // 第一步：创建用户
    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    }).then(response => {
        return response.json();
    }).then(user => {
        if (user.id) {
            // 第二步：发送欢迎邮件
            fetch('/api/email/welcome', {
                method: 'POST',
                body: JSON.stringify({
                    userId: user.id,
                    email: user.email
                })
            }).then(response => {
                return response.json();
            }).then(emailResult => {
                if (emailResult.sent) {
                    // 第三步：创建用户配置文件
                    fetch('/api/profiles', {
                        method: 'POST',
                        body: JSON.stringify({
                            userId: user.id,
                            name: user.name
                        })
                    }).then(response => {
                        return response.json();
                    }).then(profileResult => {
                        if (profileResult.created) {
                            // 第四步：分配默认权限
                            fetch('/api/permissions', {
                                method: 'POST',
                                body: JSON.stringify({
                                    userId: user.id,
                                    role: 'user'
                                })
                            }).then(response => {
                                return response.json();
                            }).then(permissionResult => {
                                if (permissionResult.assigned) {
                                    // 第五步：记录用户活动
                                    fetch('/api/activity', {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            userId: user.id,
                                            action: 'user_created'
                                        })
                                    }).then(response => {
                                        return response.json();
                                    }).then(activityResult => {
                                        if (activityResult.logged) {
                                            callback(null, {
                                                user: user,
                                                emailSent: true,
                                                profileCreated: true,
                                                permissionsAssigned: true,
                                                activityLogged: true
                                            });
                                        } else {
                                            callback(new Error('Failed to log activity'));
                                        }
                                    }).catch(error => {
                                        callback(error);
                                    });
                                } else {
                                    callback(new Error('Failed to assign permissions'));
                                }
                            }).catch(error => {
                                callback(error);
                            });
                        } else {
                            callback(new Error('Failed to create profile'));
                        }
                    }).catch(error => {
                        callback(error);
                    });
                } else {
                    callback(new Error('Failed to send welcome email'));
                }
            }).catch(error => {
                callback(error);
            });
        } else {
            callback(new Error('Failed to create user'));
        }
    }).catch(error => {
        callback(error);
    });
}

// 文件上传的回调地狱
function uploadFileAndProcess(file, callback) {
    // 第一步：上传文件
    const formData = new FormData();
    formData.append('file', file);
    
    fetch('/api/upload', {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json();
    }).then(uploadResult => {
        if (uploadResult.uploaded) {
            // 第二步：验证文件类型
            fetch('/api/validate/file', {
                method: 'POST',
                body: JSON.stringify({
                    fileId: uploadResult.fileId,
                    type: file.type
                })
            }).then(response => {
                return response.json();
            }).then(validationResult => {
                if (validationResult.valid) {
                    // 第三步：处理文件内容
                    fetch('/api/process/file', {
                        method: 'POST',
                        body: JSON.stringify({
                            fileId: uploadResult.fileId
                        })
                    }).then(response => {
                        return response.json();
                    }).then(processResult => {
                        if (processResult.processed) {
                            // 第四步：保存处理结果
                            fetch('/api/save/result', {
                                method: 'POST',
                                body: JSON.stringify({
                                    fileId: uploadResult.fileId,
                                    result: processResult.result
                                })
                            }).then(response => {
                                return response.json();
                            }).then(saveResult => {
                                if (saveResult.saved) {
                                    callback(null, {
                                        fileId: uploadResult.fileId,
                                        result: processResult.result
                                    });
                                } else {
                                    callback(new Error('Failed to save result'));
                                }
                            }).catch(error => {
                                callback(error);
                            });
                        } else {
                            callback(new Error('Failed to process file'));
                        }
                    }).catch(error => {
                        callback(error);
                    });
                } else {
                    callback(new Error('Invalid file type'));
                }
            }).catch(error => {
                callback(error);
            });
        } else {
            callback(new Error('Failed to upload file'));
        }
    }).catch(error => {
        callback(error);
    });
}

module.exports = { 
    processData, 
    createUserAndSendEmail, 
    uploadFileAndProcess 
};
