const priorityColor = (priority) => {
  if (priority === "HIGH") return "text-red-500";
  if (priority === "MEDIUM") return "text-amber-500";
  if (priority === "LOW") return "text-green-500";
};

const TicketCard = ({ ticket, onAddToTask }) => {
  return (
    <div
      onClick={() => onAddToTask(ticket)}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-violet-300 transition-all duration-200"
    >
      {/* Title & Status */}
     <div className="flex justify-between items-start gap-2 mb-2">
  <h3 className="font-bold text-gray-900 text-base">{ticket.title}</h3>
  <span className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full shrink-0 
    ${ticket.status === "Open" 
      ? "bg-green-100 text-green-600" 
      : "bg-yellow-100 text-yellow-600"}`}>
    <span className={`w-2 h-2 rounded-full inline-block 
      ${ticket.status === "Open" 
        ? "bg-green-500" 
        : "bg-yellow-500"}`}>
    </span>
    {ticket.status}
  </span>
</div>
      {/* Description */}
      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{ticket.description}</p>

      {/* Footer */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">{ticket.id}</span>
          <span className={`font-bold ${priorityColor(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>{ticket.customer}</span>
          <span>📅</span>
          <span>{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;