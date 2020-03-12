import { Document } from "mongoose";

export interface ITodo extends Document {
  task: string;
  isActive: boolean;
  id: number;
}