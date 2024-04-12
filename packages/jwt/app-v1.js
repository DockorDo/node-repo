const jwt = require("jsonwebtoken")
const secret = '17koa.com'

var token = jwt.sign({
    data:{
        user_id: 100000,
        user_name: 'dodo',
        use_email:'rguo9659@gmail.com'
    }
},secret,{expiresIn: '1h'})

try {
    var decoded = jwt.verify(token,secret);
    console.log(decoded)
} catch (error) {
    console.log(error.message)
}