"use client"
import Switch from '@mui/material/Switch';
import { useState } from 'react';

function Workmode() {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    const [isclicked , setIsclicked] = useState(false);
    const [ischecked , setIschecked] = useState(false);
    const [isaway , setIsaway] = useState(false);
    return (
        <section className="h-fit w-full p-4 border rounded-[20px] flex flex-col gap-y-1 bg-white items-center">
            <div className="flex gap-x-4 justify-center font-bold mb-2 ">
                <h1 className="text-green-600">Home</h1>
                {  isclicked &&  <Switch {...label}  style={{color:"green"}} size='medium' onClick={()=>setIsclicked(false)}/> }
                { !isclicked &&  <Switch {...label}  style={{color:"red"}} size='medium' className='rotate-180 ' onClick={()=>setIsclicked(true)}/>   }
                <h1 className="text-red-500">Office</h1>
            </div>
            <button className="bg-[#FF9136] text-white font-semibold rounded-lg h-fit w-full p-2" onClick={()=>setIschecked(!ischecked)}>
               { ischecked?"Check Out":"Check In"}
            </button>
            {ischecked && <button className={`${!isaway?"text-gray-400":"text-black border-black"}  border-2 font-semibold rounded-lg h-fit w-full p-1 mb-1`} onClick={()=>setIsaway(!isaway)}>
               { isaway?"Availabe":"Away"}
            </button>}
            <h1 className={`${ischecked?"text-green-600":"text-red-500"}`}> {ischecked?"You are checked in":"You are checked out"}</h1>
        </section>
    );
}

export default Workmode;