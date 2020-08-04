const mongoose = require('mongoose');

const { Schema } = mongoose;

const CSSE_COVID_19_daily_reports_US_Model = new Schema({

	Province_State: {
		type: String,
	},
	Country_Region: {
		type: String
	},
	Last_Update: {
		type: String
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
	Deaths: { 
		type: Number
	},
	Recovered: {
		type: Number 
	},
	Active: { 
		type: Number 
	},
	FIPS: { 
		type: Number 
	},
	Incident_Rate: { 
		type: Number 
	},
	People_Tested: { 
		type: Number 
	},
	People_Hospitalized: {
		type: Number
	},
	Mortality_Rate: { 
		type: Number 
	},
	UID: { 
		type: Number
	},
	ISO3: {
		type: String
	},
	Testing_Rate: { 
		type: Number
	},
	Hospitalization_Rate : {
		type: Number
	},
};

module.exports = mongoose.model('CSSE_COVID_19_daily_reports_US', CSSE_COVID_19_daily_reports_US_Model)
