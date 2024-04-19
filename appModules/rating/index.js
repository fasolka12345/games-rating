const config = require("./config.js");
const makeRatingFile = require("./rating-file.js");
const {updateRating, createRating} = require("./calculations.js");

module.exports = {
    config,
    makeRatingFile,
    updateRating,
    createRating,
}