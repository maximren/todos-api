import { Schema } from "mongoose";
import mongoose = require("mongoose")

import { ITodo } from '../types/todos.interface';

const id = `f${(~~(Math.random()*1e8)).toString(16)}`;

const TodoSchema: Schema<ITodo> = new Schema({
  task: { type: String, required: true },
  isActive: { type: Boolean, default: true, match: true || false },
  id: { type: String, default: id }
});

export default mongoose.model<ITodo>("Todo", TodoSchema);