'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', jwt, controller.home.index);
  router.get('/user', controller.user.index);
  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);
};
