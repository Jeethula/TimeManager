import TaskTable from "./TaskTable";

const Tasks = () => {
    const tasksData = {
      res1: {
        title: "sample data in the form",
        priority: "High",
        status: "Completed",
        deadline: "sep 18"
      },
      res2: {
        title: "sample data",
        priority: "Low",
        status: "Yet to start",
        deadline: "sep 21"
      }
    };
  
    return (
      <main className="py-4 px-6 h-fit w-full flex flex-col border bg-white rounded-[20px] gap-y-4">
        <div className="flex justify-between">
          <div className="font-medium">
            <h1 className="text-[16px]">Tasks</h1>
            <h2 className="text-[#6B7280] tracking-wider text-[12px]">ASSIGNED TO ME</h2>
          </div>
          <button className="bg-[#FF9136] h-fit px-3 py-1 rounded-md text-white font-semibold">
            Add Task
          </button>
        </div>
        <div>
          <TaskTable tasks={tasksData} />
          <hr className="mt-2 mb-4" />
          <h2 className="text-[#6B7280] tracking-wider text-[12px] mb-2">TASKS I HAVE ASSIGNED</h2>
          <TaskTable tasks={tasksData} />
        </div>
      </main>
    );
  };
  
  export default Tasks;