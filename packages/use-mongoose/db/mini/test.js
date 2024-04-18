// 引入数据库链接
require('./connect')
// 引入模型文件
const User = require('./user')

const user = new User({
    username:'dodo',
    password:'0123456789'
})

user.save()

