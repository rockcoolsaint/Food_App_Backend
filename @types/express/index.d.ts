import { AuthPayload } from "../../Auth.dto";
// export {};

declare global {
  namespace Express {
    export interface Request {
      user?: AuthPayload;
    }
  }
}