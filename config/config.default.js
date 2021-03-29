/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606033322763_1399';

  // add your middleware config here
  config.middleware = [];
  // 配置mongoose
  config.mongoose = {
    client: {
      url: "mongodb://localhost:27017/block",
      options: {},
    },
  };
  // 配置鉴权
  config.jwt = {
    secret: '123456',
  };
  // 关闭csrf
  // 跨域
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // add your user configF here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};