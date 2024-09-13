import { Briefcase, House, MessageSquare, Settings, Timer } from "lucide-react";

function Sidebar() {
    return (
        <nav className="h-full flex flex-col justify-between items-center bg-[#FF9136] py-[20px] ">
            <section className="flex flex-col justify-between gap-y-[96px]">
                <div className="bg-white flex justify-center rounded-sm">
                    <h1 className="font-serif font-bold text-[#FF9136] text-2xl px-1">T</h1>
                </div>
                <div className="flex flex-col gap-y-6 items-center">
                    <div className="bg-[#fdaf77] p-2 rounded-md">
                    <House strokeWidth={1.5} />
                    </div>   
                 <Briefcase strokeWidth={1.5} />
                 <Timer strokeWidth={1.5} />
                </div>
            </section>
            <section>
               <Timer strokeWidth={1.5} />
            </section>
            <section className="flex flex-col justify-between gap-y-6 py-[30px]">
             <MessageSquare strokeWidth={1.5} />
             <Settings strokeWidth={1.5} />
            </section>
            
        </nav>
    );
}

export default Sidebar;