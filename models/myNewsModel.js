const mongoose = require('mongoose');
const slugify = require('slugify');

const newsSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'A News must have a title'],
  },
  author: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  urlToImage: {
    type: String,
  },
  content: {
    type: String,
    trim: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  slug: String,
});

newsSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
