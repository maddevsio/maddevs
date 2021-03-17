const mongoose = require('mongoose');

async function connect(url, config) {
  try {
    await mongoose.connect(url, config);
  } catch(error) {
    console.error('Error during connecting to database', error);
  }
}

module.exports = {
  connect
};
