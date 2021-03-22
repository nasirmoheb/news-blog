const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

const News = require('./../models/myNewsModel');

exports.getNews = async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=${process.env.APIKEY}`
    );

    const news = await News.find();

    res.render('home', { articles: newsAPI.data.articles, news });
  } catch (err) {
    res.render('home', { articles: null });
  }
};

exports.searchNews = async (req, res) => {
  const search = req.body.search;
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${search}&category=technology&pageSize=20&apiKey=${process.env.APIKEY}`
    );

    res.render('search', { articles: newsAPI.data.articles });
  } catch (err) {
    res.render('search', { articles: null });
  }
};

exports.getMyNews = async (req, res) => {
  try {
    const news = await News.findOne({ slug: req.params.slug });
    console.log(news);
    res.render('singleNews', { news });
  } catch (err) {
    console.log(err);
    res.render('search', { articles: null });
  }
};
