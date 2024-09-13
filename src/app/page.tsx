import EmployeeTime from "@/Components/EmployeeTime";
import Managetasks from "@/Components/Managetasks";
import Tasks from "@/Components/Tasks";
import Timesheet from "@/Components/Timesheet";
import Topnav from "@/Components/Topnav";
import Workmode from "@/Components/Workmode";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";


export default function Home() {


  return (
   <main className="w-full">
      <header>
        <Topnav/>
      </header>
      <section className="flex justify-center mt-2">
        <div className="border py-[6px] px-[6px] bg-white rounded-[10px] flex gap-x-2 font-medium">
          <button className="bg-[#FF9136] h-fit w-fit p-2 rounded-[8px] text-white">
            Summary
          </button>
          <button className="h-fit w-fit p-2 rounded-[8px]" >
            Updates
          </button>
        </div>
      </section>
      <section className="flex gap-6 mt-3 ">     
        <aside className="flex flex-col gap-y-6 w-[70%]">
         <Tasks/>
         <Managetasks />
        </aside>
        <aside className=" flex flex-col gap-y-6 w-[25%]" >
          <Workmode/>
          <Timesheet/>
          <EmployeeTime/>
        </aside>
      </section>
   </main>
  );
}
