// services/smsService.js
const twilio = require('twilio');

const accountSid = process.env.SID;
const authToken = process.env.AUTH;
const client = new twilio(accountSid, authToken);

const sendSMS = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      from: '+917905321205',
      to,
    });

    console.log(`Message SID: ${message.sid}`);
    return { success: true, message: 'SMS sent successfully' };
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw { success: false, message: 'Error sending SMS' };
  }
};

module.exports = {
  sendSMS,
};
