import React from "react";

const formatPriority = (priority) => {
  if (!priority) {
    return null;
  }

  return priority.charAt(0).toUpperCase() + priority.slice(1);
};

const Task = ({
  title,
  deadline,
  description,
  priority,
  done,
  markDone,
  deleteTask,
}) => {
  const priorityLabel = formatPriority(priority);
  const priorityClass = priority ? ` card-priority-${priority}` : "";
  const cardClassName = `card${done ? " card-done" : ""}${priorityClass}`;

  return (
    <div className={cardClassName}>
      <div className="card-header">
        <p className="title">{title}</p>
        {priorityLabel && (
          <span className={`priority-badge priority-${priority}`}>
            {priorityLabel}
          </span>
        )}
      </div>
      <div className="card-body">
        <p className="deadline-label">Due: {deadline}</p>
        {description && <p className="task-description">{description}</p>}
        <div className="card-actions">
          <button onClick={markDone} className="doneButton">
            Done
          </button>
          <button className="deleteButton" onClick={deleteTask}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
