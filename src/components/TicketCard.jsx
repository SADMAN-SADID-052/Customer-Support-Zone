const priorityColor = (priority) => {
  if (priority === "HIGH") return "badge-error text-white";
  if (priority === "MEDIUM") return "badge-warning text-white";
  if (priority === "LOW") return "badge-success text-white";
};

const statusColor = (status) => {
  if (status === "Open") return "badge-info text-white";
  if (status === "In-Progress") return "badge-warning text-white";
};

const TicketCard = ({ ticket, onAddToTask }) => {
  return (
    <div
      onClick={() => onAddToTask(ticket)}
      className="card bg-white shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-violet-300 transition-all duration-200"
    >
      <div className="card-body p-5">

        {/* Title & Status */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-800 text-sm">{ticket.title}</h3>
          <span className={`badge badge-sm shrink-0 ${statusColor(ticket.status)}`}>
            {ticket.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{ticket.description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
          <span className={`badge badge-sm ${priorityColor(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{ticket.id}</span>
            <span>{ticket.customer}</span>
            <span>{ticket.createdAt}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketCard;