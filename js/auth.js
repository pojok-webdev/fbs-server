var sha1 = require('sha1')
login = (obj,password) => {
    mypassword = obj.password    
    salt = mypassword.substring(0,10)
    saltedpassword = sha1(salt+password)
    __temp = saltedpassword.substring(0,30)
    _password = salt+__temp
    if(_password===obj.password){
        console.log("Login benar")
        return true
    }else{
        console.log("Login salah")
        return false
    }
}
changePassword = (obj,password) => {
    mypassword = obj.password
    salt = mypassword.substring(0,10)
    saltedpassword = sha1(salt+password)
    __temp = saltedpassword.substring(0,30)
    return salt+__temp
}
createSalt = (length,chars) => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

createuser = (user) => {

    return user
}
module.exports = {
    login : login,
    changePassword : changePassword
}