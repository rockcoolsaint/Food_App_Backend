/* ------------------- Email --------------------- */

/* ------------------- Notification --------------------- */

/* ------------------- OTP --------------------- */

export const GenerateOtp = () => {

  const otp = Math.floor(10000 + Math.random() * 900000);
  let expiry = new Date()
  expiry.setTime(new Date().getTime() + (30 * 60 * 1000));

  return {otp, expiry};
}

export const onRequestOTP = async(otp: number, toPhoneNumber: string) => {

  try {
      const accountSid = "AC756af1427be0e298490f902c760cde91";
      const authToken = "d9d02139a70e06a9f4a99610d91b0085";
      const client = require('twilio')(accountSid, authToken);
  
      const response = await client.message.create({
          body: `Your OTP is ${otp}`,
          from: '+16186346488',
          to: `+234${toPhoneNumber}` // recipient phone number // Add country before the number
      })
  
      return response;
  } catch (error){
      return false
  }
  
}

/* ------------------- Payment --------------------- */