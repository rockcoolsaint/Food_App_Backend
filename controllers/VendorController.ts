import { NextFunction, Request, Response } from "express";
import { EditVendorInput, VendorLoginInput } from "../dto";
import { GenerateSignature, ValidatePassword } from "../utility";
import { FindVendor } from "./AdminController";

export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = <VendorLoginInput>req.body;

  const existingUser = await FindVendor('', email);

  if(existingUser !== null){

      const validation = await ValidatePassword(password, existingUser.password, existingUser.salt);
      if(validation){

          const signature = await GenerateSignature({
              _id: existingUser.id,
              email: existingUser.email,
              name: existingUser.name
          })
          return res.json(signature);
      }
  }

  return res.json({'message': 'Login credential is not valid'})
}

export const GetVendorProfile = async (req: Request,res: Response, next: NextFunction) => {

  const user = req.user;
   
  if(user){

     const existingVendor = await FindVendor(user._id);
     return res.json(existingVendor);
  }

  return res.json({'message': 'vendor Information Not Found'})
}



export const UpdateVendorProfile = async (req: Request,res: Response, next: NextFunction) => {

  const user = req.user;

  const { foodType, name, address, phone} = <EditVendorInput>req.body;
   
  if(user){

     const existingVendor = await FindVendor(user._id);

     if(existingVendor !== null){

          existingVendor.name = name;
          existingVendor.address// = address;
          existingVendor.phone = phone;
          existingVendor.foodType = foodType;
          const saveResult = await existingVendor.save();

          return res.json(saveResult);
     }

  }
  return res.json({'message': 'Unable to Update vendor profile '})

}



export const UpdateVendorCoverImage = async (req: Request,res: Response, next: NextFunction) => {

  // const user = req.user;

  //  if(user){

  //    const vendor = await FindVendor(user._id);

  //    if(vendor !== null){

  //         const files = req.files as [Express.Multer.File];

  //         const images = files.map((file: Express.Multer.File) => file.filename);

  //         vendor.coverImages.push(...images);

  //         const saveResult = await vendor.save();
          
  //         return res.json(saveResult);
  //    }

  // }
  // return res.json({'message': 'Unable to Update vendor profile '})

}

export const UpdateVendorService = async (req: Request,res: Response, next: NextFunction) => {

  const user = req.user;

  const { lat, lng} = req.body;
   
  if(user){

     const existingVendor = await FindVendor(user._id);

     if(existingVendor !== null){

          existingVendor.serviceAvailable = !existingVendor.serviceAvailable;
          if(lat && lng){
              existingVendor.lat = lat;
              existingVendor.lng = lng;
          }
          const saveResult = await existingVendor.save();

          return res.json(saveResult);
     }

  }
  return res.json({'message': 'Unable to Update vendor profile '})

}