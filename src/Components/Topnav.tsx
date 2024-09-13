import { BellDot, Home } from 'lucide-react';

function Topnav() {
    return (
        <header className="flex justify-between items-center">
            <section>
                <h1 className="font-bold text-[18px]">Good morning,
                <span  style={{
                    background: "linear-gradient(43deg, #FFC341 0%, #FF2B1C 46%, #FFCC70 100%)",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>Emily</span></h1>
                <h2 className=" text-sm">12:20pm,September 12,Thursday</h2>
            </section>
            <section className="flex gap-x-3">
                <div className="bg-white p-3 border-[0.5px] rounded-lg">
                 <BellDot />
                </div>
                <div className='bg-white p-3 rounded-lg border-[0.5px] text-gray-400'>
                   <h1 className='flex items-center gap-x-3'><Home /> <span>Planned Remote Work</span></h1> 
                </div>
            </section>
        </header>
    );
}

export default Topnav;