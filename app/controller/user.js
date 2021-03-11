'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'userindex'
  }

  // 登录/注册
  async lorUser() {
    const { ctx, service } = this
    const { username: name, password: pwd } = ctx.request.body
    const res = await service.user.lorUser(name, pwd)
    if (res) {
      ctx.body = {
        code: 1,
        msg: res
      }
    } else {
      ctx.body = {
        code: 0,
        msg: '注册失败或登录密码错误'
      }
    }
  }
}

module.exports = UserController;