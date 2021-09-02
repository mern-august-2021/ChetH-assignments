const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	description: String
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;