"use client";

import { DroppableProvided } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

interface TaskColumnProps {
  status: string;
  tasks: any[];
  innerRef: any;
  provided: DroppableProvided;
}

const TaskColumn = ({ status, tasks, innerRef, provided }: TaskColumnProps) => {
  return (
    <div ref={innerRef} {...provided.droppableProps} className="task-column">
      <h3>{status}</h3>
      {tasks.map((task, index) => (
        <TaskCard key={task._id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  );
};

export default TaskColumn;
