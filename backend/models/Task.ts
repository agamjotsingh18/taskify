import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['To-Do', 'In Progress', 'Under Review', 'Completed'], default: 'To-Do' },
  priority: { type: String, enum: ['Low', 'Medium', 'Urgent'] },
  deadline: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Task', TaskSchema);
