import React from 'react';

function TaskTable ({ tasks }) {
  const taskEntries = Object.entries(tasks);
  
  if (taskEntries.length === 0) {
    return <p>No tasks available.</p>;
  }

  const headers = Object.keys(taskEntries[0][1]);
  return (
    <table className="table-auto w-full">
    <thead className='font-light text-gray-400'>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="py-1 text-left capitalize">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {taskEntries.map(([key, task]) => (
        <tr key={key}>
          {headers.map((header, index) => (
            <td key={index} className="border-none">
              {task[header]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default TaskTable;
