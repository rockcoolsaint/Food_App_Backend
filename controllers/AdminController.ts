import { NextFunction, Request, Response } from "express";
import { CreateVendorInput } from "../dto";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVendorInput>req.body;

  return res.json({name, address, pincode, foodType, email, password, ownerName, phone})
}

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
  
}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {
  
}