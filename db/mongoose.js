const mongoose = require('mongoose');
// const dbConnecString = "mongodb://localhost:27017/colorify";
const dbConnecString = "mongodb://argoyal:8285578793a@ds155218.mlab.com:55218/imdbapi";

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || dbConnecString);

module.exports = {
  mongoose
};