const express = require('express');
const myNewsController = require('./../controller/myNewsController');

const router = new express.Router();

router.route('/').get(myNewsController.getAllNews).post(myNewsController.createNews);

router
  .route('/:id')
  .get(myNewsController.getNews)
  .patch(myNewsController.updateNews)
  .delete(myNewsController.deleteNews);

module.exports = router;
