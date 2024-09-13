import Switch from '@mui/material/Switch';
function Workmode() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <section className="h-fit w-full p-4 border rounded-[20px] flex flex-col gap-y-1 bg-white items-center">
            <div className="flex gap-x-4 justify-center font-bold mb-2 ">
                <h1 className="text-green-600">Home</h1>
                <Switch {...label} defaultChecked />
                <h1 className="text-red-500">Office</h1>
            </div>
            <button className="bg-[#FF9136] text-white font-semibold rounded-lg h-fit w-full p-2">
                Check Out
            </button>
            <button className="text-gray-400  border-2 font-semibold rounded-lg h-fit w-full p-1 mb-1">
                Away
            </button>
            <h1 className="text-green-600">You are checked in</h1>
        </section>
    );
}

export default Workmode;