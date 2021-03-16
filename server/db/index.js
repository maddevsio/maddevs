const mongoose = require('mongoose');

function connect(url) {
  mongoose.connect(url);
}

module.exports = {
  connect
};
