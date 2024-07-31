"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RootState } from '../store';
import { setTasks, updateTask } from '../store/slices/taskSlice';
import api from '../utils/api';
import TaskColumn from './TaskColumn';

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks', { params: { userId: user._id } });
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    dispatch(updateTask(movedTask));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="task-board">
        {['To-Do', 'In Progress', 'Under Review', 'Completed'].map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <TaskColumn
                status={status}
                tasks={tasks.filter((task) => task.status === status)}
                innerRef={provided.innerRef}
                provided={provided}
              />
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
