const News = require('./../models/myNewsModel');

exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);

    res.status(200).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};
exports.getNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();

    res.status(200).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findOneAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};
