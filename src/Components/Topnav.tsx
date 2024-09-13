import { BellDot } from 'lucide-react';

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
                <h2 className=" text-sm">12:20pm,Thursday</h2>
            </section>
            <section className="flex gap-x-3">
                <div className="bg-white p-3 border-[0.5px] rounded-md">
                 <BellDot />
                </div>
                <select className='h-[50px] rounded-md border-[0.5px]'>
                    <option value="1">Working from office </option>
                    <option value="2">Working from home</option>
                </select>
            </section>
        </header>
    );
}

export default Topnav;