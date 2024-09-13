import { ArrowDown, ArrowRight, ArrowUp, CheckCheck, Loader, Timer } from 'lucide-react';
import React from 'react';

function TaskTable ({ tasks }) {
  const taskEntries = Object.entries(tasks);
  
  if (taskEntries.length === 0) {
    return <p>No tasks available.</p>;
  }

  const headers = Object.keys(taskEntries[0][1]);
  return (
    <table className="w-full px-5">
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="py-1 text-left font-normal text-[#B9B9B9] capitalize">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {taskEntries.map(([key, task]) => (
        <tr key={key} >
          {headers.map((header, index) => (
            <td key={index} 
              className={`border-none w-fit bg-white py-1 `}>
              { task[header]==="High" && <span className='flex gap-x-2 items-center'> <ArrowUp size={25} strokeWidth={1.5} /> {task[header]} </span>}
              { task[header]==="Medium" && <span className='flex gap-x-2 items-center'> <ArrowRight strokeWidth={1.5} /> {task[header]} </span>}
              { task[header]==="Low" &&  <span className='flex gap-x-2 items-center'> <ArrowDown strokeWidth={1.5} /> {task[header]} </span>}
              { task[header]==="Yet to start" &&  <span className='flex gap-x-2 items-center text-[12px] text-[#0069D1] bg-[#CCEFFF] w-fit h-fit p-1 px-4 rounded-3xl'> <Timer color='blue' strokeWidth={1.5} /> {task[header]} </span>}
              { task[header]==="In Progress" &&  <span className='flex gap-x-2 items-center text-[12px] text-[#008000] bg-[#DCFFDC] w-fit h-fit p-1 px-4 rounded-3xl'> <Loader strokeWidth={1.5} /> {task[header]} </span>}
              { task[header]==="Completed" &&  <span className='flex gap-x-2 items-center text-[12px] text-[#008000] bg-[#DCFFDC] w-fit h-fit p-1 px-4 rounded-3xl'> <CheckCheck color='green' strokeWidth={1.5} /> {task[header]} </span>}
              { header==="title" &&  <span className='font-medium capitalize '> {task[header]} </span>}
              { task[header]!=="High" && header!="title" && task[header]!=="Medium" && task[header]!=="Low" && task[header]!=="Yet to start" && task[header]!=="In Progress" && task[header]!=="Completed" && task[header]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default TaskTable;
