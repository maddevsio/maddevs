const mongoose = require('mongoose');

function connect(url, config) {
  mongoose.connect(url, config);
}

module.exports = {
  connect
};
