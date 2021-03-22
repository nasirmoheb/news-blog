const express = require('express');

const newsController = require('./../controller/newsController');

const router = new express.Router();

router.route('/').get(newsController.getNews).post(newsController.searchNews);

router.route('/news/:slug').get(newsController.getMyNews);

module.exports = router;
