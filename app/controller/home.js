'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service, app } = this;
    ctx.body = 'rr';
  }

  async test(){
    this.ctx.body = 'test'
  }
}

module.exports = HomeController;
