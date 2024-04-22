import { User } from "./User";

export interface Message {
  id: number;
  user: User;
  msg: string;
}
