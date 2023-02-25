import { roles } from "./roles";

export interface Users{
  id:string;
  fullName:string;
  tokenString:string;
  userName:string;
  roles:roles[];
}