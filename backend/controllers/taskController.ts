import { Request, Response } from 'express';
import Task from '../models/Task';

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, priority, deadline, user } = req.body;
  try {
    const newTask = new Task({ title, description, status, priority, deadline, user });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const { userId } = req.query;
  try {
    const tasks = await Task.find({ user: userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
};
