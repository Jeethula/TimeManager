"use client"
import EmployeeTime from "@/Components/EmployeeTime";
import Managetasks from "@/Components/Managetasks";
import Tasks from "@/Components/Tasks";
import Timesheet from "@/Components/Timesheet";
import Topnav from "@/Components/Topnav";
import Workmode from "@/Components/Workmode";
import { useState } from "react";
export default function Home() {
const [isSummary, setIsSummary] = useState(true);
  return (
   <main className="w-full">
      <header>
        <Topnav/>
      </header>
      <section className="flex justify-center mt-2">
        <div className="border py-[6px] px-[6px] bg-white rounded-[10px] flex gap-x-2 font-medium">
          <button className={`${isSummary?"bg-[#FF9136] text-white h-fit w-fit p-2 rounded-[8px]":"bg-white text-black"}`} onClick={()=>setIsSummary(true)}>
            Summary
          </button>
          <button className={`${!isSummary?"bg-[#FF9136] text-white h-fit w-fit p-2 rounded-[8px]":"bg-white text-black"}`} onClick={()=>setIsSummary(false)}>
            Updates
          </button>
        </div>
      </section>
     { isSummary ?
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
      </section>  :
     <section className=" min-h-screen h-full w-full bg-white rounded-xl mt-5">
        
      </section> }

   </main>
  );
}
