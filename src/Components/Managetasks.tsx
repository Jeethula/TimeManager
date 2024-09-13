import TaskTable from "./TaskTable";

function Managetasks() {

    const tasksData = {
        res1: {
          name: "Kumaran",
          Role: "Intern",
          Dept: "IT",
          Type: "resource"
        },
        res2: {
          name: "Deepak",
          Role: "Sr  Developer",
          Dept: "HR",
          Type: "Leave"
        }
      };

      const tasksData1 = {
        res1:{
            title:"sample data in the form",
            status:"Completed",
            Submitted:"sep 18"
        },
        res2:{
            title:"sample data for the sample form",
            status:"Yet to start",
            Submitted:"sep 21"
        }
    }

    return (
        <main className="py-4 px-6 h-fit w-full flex flex-col border bg-white rounded-[20px]">
          <h1 className="text-[16px] ">Manage Requests</h1>  
          <h2 className="text-[#6B7280] tracking-wider text-[12px] mt-1">REQUESTS RECEIVED</h2>
          <TaskTable tasks={tasksData} />
          <hr className="mt-2 mb-4" />
          <h2 className="text-[#6B7280] tracking-wider text-[12px] mb-4">REQUESTS MADE</h2>
            <TaskTable tasks={tasksData1} />

        </main>
    );
}

export default Managetasks;