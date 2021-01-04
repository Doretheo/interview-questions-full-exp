var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/algos', {urlNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Database is connected')});


const algoSchema = new Schema({
  problem: String,
  results: String,
  date: { type: Date, default: Date.now }
});

const algo = mongoose.model('Algo', algoSchema);

algo._id = 1;
algo.save;