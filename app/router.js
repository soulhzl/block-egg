'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
  router.post('/user/loruser', controller.user.lorUser);
};
