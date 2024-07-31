"use client";

import { Draggable } from 'react-beautiful-dnd';

interface TaskCardProps {
  task: any;
  index: number;
}

const TaskCard = ({ task, index }: TaskCardProps) => {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-card"
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
