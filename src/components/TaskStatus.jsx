const TaskStatus = ({ taskList, resolvedList, onComplete }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Task Status */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Task Status</h2>
        {taskList.length === 0 ? (
          <p className="text-gray-400 text-sm">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {taskList.map((task) => (
              <div
                key={task.id}
                className="flex flex-col bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm gap-3"
              >
                <p className="text-md font-bold text-gray-900">
                  {task.title}
                </p>
                <button
                  onClick={() => onComplete(task)}
                  className="btn btn-success bg-green-600 text-white w-full"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Task */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Resolved Task</h2>
        {resolvedList.length === 0 ? (
          <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {resolvedList.map((task) => (
              <div key={task.id} className="bg-sky-100 rounded px-4 py-3">
                <p className="text-sm font-semibold text-black">{task.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
