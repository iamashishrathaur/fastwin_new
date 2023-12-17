// controllers/smsController.js
const smsService = require('../Services/sms.service');

const sendSMSController = async (req, res) => {
  const { to, body } = req.body;

  try {
    const result = await smsService.sendSMS(to, body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  sendSMSController,
};
