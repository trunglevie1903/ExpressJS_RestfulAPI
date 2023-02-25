const mongoose = require('mongoose');

const PLSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  released_year: {
    type: String,
    required: true,
    default: ""
  },
  githut_rank: {
    type: String,
    required: true,
    default: ""
  },
  pypl_rank: {
    type: String,
    required: true,
    default: ""
  },
  tiobe_rank: {
    type: String,
    required: true,
    default: ""
  }
});

module.exports = mongoose.model('programming_languages', PLSchema);