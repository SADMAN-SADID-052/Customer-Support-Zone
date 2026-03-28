const TaskStatus = ({ taskList, resolvedList, onComplete }) => {
  return (
    <div className="flex flex-col gap-6">

      {/* Task Status */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Task Status</h2>
        {taskList.length === 0 ? (
          <p className="text-gray-400 text-sm">Select a ticket to add to Task Status</p>
        ) : (
          <div className="flex flex-col gap-3">
            {taskList.map((task) => (
              <div key={task.id} className="flex justify-between items-center bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-sm font-medium text-gray-700">{task.title}</p>
                <button
                  onClick={() => onComplete(task)}
                  className="btn btn-success btn-sm text-white"
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
              <div key={task.id} className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <p className="text-sm font-medium text-green-700">{task.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default TaskStatus;