import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [ticketList, setTicketList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => setTicketList(data))
      .catch((err) => console.error("Error fetching tickets:", err));
  }, []);

  const handleAddToTask = (ticket) => {
    const exists = taskList.find((t) => t.id === ticket.id);
    if (exists) {
      toast.warn(`"${ticket.title}" is already in Task Status!`);
      return;
    }
    setTaskList([...taskList, ticket]);
    setInProgress(inProgress + 1);
    toast.success(`"${ticket.title}" added to Task Status!`);
  };
  const handleComplete = (task) => {
    setTaskList(taskList.filter((t) => t.id !== task.id));
    setResolvedList([...resolvedList, task]);
    setTicketList(ticketList.filter((t) => t.id !== task.id));
    setInProgress(inProgress - 1);
    setResolved(resolved + 1);
    toast.success(`"${task.title}" marked as Resolved! ✅`);
  };
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />

      {/* Main Section */}
      <div className="px-6 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ticket List */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ticketList.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToTask={handleAddToTask}
                />
              ))}
            </div>
          </div>

          {/* Task Status */}
          <div className="lg:col-span-1">
            <TaskStatus
              taskList={taskList}
              resolvedList={resolvedList}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
