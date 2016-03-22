'use strict';
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var ContactSchema = new Schema({
name: String,
address: String,
age: { type: Number, min:[18,'Must be over 18 to purchase tickets'], max: 120 },
email: String,
concert: String,
venue: String,
concert_date:{type: Date},
credit_card:{type:String, minlength:[16, 'Too short'], maxlength:[16, 'Too long']},

updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Contact', ContactSchema);