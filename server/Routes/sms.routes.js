// routes/smsRoutes.js

const smsController = require('../Controllers/sms.controller');

const router=(data)=>{
  data.post('/send-sms',smsController.sendSMSController)  
}


module.exports = router;
