import { NextFunction, Request, Response } from "express";
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const FindVendor = async (id: String | undefined, email?: string) => {

  if(email){
      return await Vendor.findOne({ email: email})
  }else{
      return await Vendor.findById(id);
  }

}

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVendorInput>req.body;

  const existingVendor = await FindVendor("", email)

  if(existingVendor !== null) {
    return res.json({"message": "A vendor already exists with this email ID"})
  }

  // generate a salt
  const salt = await GenerateSalt();
  const userPassword = await GeneratePassword(password, salt);

  // encrypt the password using the salt

  const createdVendor =  await Vendor.create({
      name: name,
      address: address,
      pincode: pincode,
      foodType: foodType,
      email: email,
      password: userPassword,
      salt: salt,
      ownerName: ownerName,
      phone: phone,
      rating: 0,
      serviceAvailable: false,
      coverImages: [],
      // lat: 0,
      // lng: 0
  })

  return res.json(createdVendor);
}

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
  const vendors = await Vendor.find()

  if(vendors !== null) {
    return res.json(vendors)
  }

  return res.json({ "message": "vendors data not available" })
}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {
  const vendorId = req.params.id;

  // const vendors = await Vendor.findById(vendorId);
  const vendors = await FindVendor(vendorId);

  if(vendors !== null){
      return res.json(vendors)
  }

  return res.json({"message": "Vendors data not available"})
}