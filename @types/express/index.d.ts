import { AuthPayload } from "../../src/dto";
// export {};

declare global {
  namespace Express {
    export interface Request {
      user?: AuthPayload;
    }
  }
}