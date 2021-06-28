const Pay = require('./PaymentAPI');
const Router = require('express').Router();

Router.post('/pay',Pay.Pay);


module.exports=Router;