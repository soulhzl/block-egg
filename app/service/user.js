const Service = require('egg').Service;
const crypto = require('crypto');
class UserService extends Service {
    // 给密码加密
    getMd5Data(data) {
        return crypto.createHash('md5').update(data).digest('hex');
    }
    // 添加用户到集合 -- 注册
    async addUser(usn, pwd) {
        const findResult = await this.ctx.model.User.findOne({ username: usn })
        if (findResult) {
            if (findResult.password == this.getMd5Data(pwd)) {
                const token = this.app.jwt.sign({
                    id: findResult._id,
                    username: usn
                }, this.app.config.jwt.secret)
                return {
                    token: 'Bearer ' + token,
                    desc: '登录成功'
                }
            }
            return
        }
        const user = new this.ctx.model.User({
            username: usn,
            password: this.getMd5Data(pwd)
        })
        const userRes = await user.save()
        const token = this.app.jwt.sign({
            id: userRes._id,
            username: usn
        }, this.app.config.jwt.secret)
        return { token: 'Bearer ' + token, desc: '注册成功' }
    }
}

module.exports = UserService;