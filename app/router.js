'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/room', controller.room.index);
  router.get('/roomAdd', controller.room.roomAdd);
  router.get('/roomDel', controller.room.roomDel);
  router.get('/roomTest', controller.room.roomTest);

  router.get('/news', controller.news.newsGet);
};
