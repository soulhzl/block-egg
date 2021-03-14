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
    ctx.apiReturn(res.token, res.msg)
  }
}

module.exports = UserController;