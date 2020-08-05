const mongoose = require('mongoose');

const { Schema } = mongoose;

const CSSE_COVID_19_daily_reports_US_Model = new Schema({

	FIPS: {
		type: String,
	},
	Admin2: {
		type: String
	},
	Province_State: {
		type: String
	},
	Country_Region: {
		type: Number 
	},
	Lat: {
		type: Number 
	},
	Long_: {
		type: Number 
	},
	Confirmed: { 
		type: Number
	},
	Recovered: {
		type: Number 
	},
	Active: { 
		type: Number 
	},
	combined_Key: { 
		type: String 
	},
	Incidence_Rate: { 
		type: Number 
	},
	'Case-Fatality_Ratio': { 
		type: Number 
	},
};

module.exports = mongoose.model('CSSE_COVID_19_daily_reports_US', CSSE_COVID_19_daily_reports_US_Model)
