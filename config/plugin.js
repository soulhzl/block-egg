'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 配置mongoose
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  // 配置鉴权
  jwt: {
    enable: true,
    package: 'egg-jwt',
  }
};