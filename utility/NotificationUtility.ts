/* ------------------- Email --------------------- */

import { TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, TWILIO_SID } from "../config";

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
      const accountSid = TWILIO_SID;
      const authToken = TWILIO_AUTH_TOKEN;
      const client = require('twilio')(accountSid, authToken);
  
      const response = await client.message.create({
          body: `Your OTP is ${otp}`,
          from: TWILIO_FROM_NUMBER,
          to: `+234${toPhoneNumber}` // recipient phone number // Add country before the number
      })
  
      return response;
  } catch (error){
      return false
  }
  
}

/* ------------------- Payment --------------------- */