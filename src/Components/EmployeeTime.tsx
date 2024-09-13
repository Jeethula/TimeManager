function EmployeeTime() {
    return (
        <main className="h-fit w-full p-4 border rounded-[20px] flex flex-col gap-y-1 bg-white ">
           <h1 className="text-[16px]">Employee Timers</h1>
           <h1 className="text-gray-500 tracking-wider text-[12px]">TODAY</h1>
           <table className="mt-3">
            <tbody>
            <td>
                <tr className="text-sm text-gray-400 flex gap-x-7"> <span>Sewtha</span> 3 hrs 25 mins </tr>
                <tr className="text-sm text-gray-400 flex gap-x-7 mt-1"> <span>Sewtha</span> 1 hrs 15 mins </tr>
                <tr className="text-sm text-gray-400 flex gap-x-7 mt-1"> <span>Sewtha</span> 4 hrs 00 mins </tr>
                <tr className="text-sm text-gray-400 flex gap-x-7 mt-1"> <span>Sewtha</span> Nil </tr>
                <tr className="text-sm text-gray-400 flex gap-x-7 mt-1"> <span>Sewtha</span> 5 hrs 10 mins </tr>
            </td>
            </tbody>
           </table>
        </main>
    );
}

export default EmployeeTime;