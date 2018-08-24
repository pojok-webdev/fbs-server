var sha1 = require('sha1')
login = (obj,password) => {
    console.log("Login OBJ",obj)
    mypassword = (obj.password)
    salt = obj.salt
    saltedpassword = sha1(salt+password.trim())
    if(mypassword===saltedpassword){
        console.log("Login benar")
        return true
    }else{
        console.log("Login salah")
        return false
    }
}
changePassword = (obj) => {
    mypassword = obj.password
    console.log('mypassword',mypassword)
    salt = _createSalt()
    saltedpassword = sha1(salt+(mypassword).trim())
    return {salt:salt,password:saltedpassword}
}
createSalt = (length,chars) => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
_createSalt = () =>{
    return createSalt(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
}
createUser = (user) => {
    salt = _createSalt()
    saltedpassword = sha1(salt+(user.password).trim())
    user.password = saltedpassword
    user.salt = salt
    return user
}
module.exports = {
    login : login,
    changePassword : changePassword,
    createUser : createUser
}