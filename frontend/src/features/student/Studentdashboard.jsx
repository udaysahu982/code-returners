
import React from 'react';

const Studentdashboard = () => {

    return (
        <div className="min-h-screen w-full bg-slate-100">

            <div className="flex min-h-screen w-full pt-[10px]">

                {/* LEFT SIDE - Sidebar */}
                <aside className="w-[18%] min-w-[220px] mt-[5px]  bg-white border border-gray-200 rounded-xl p-5">

                </aside>


                {/* RIGHT SIDE - Main Content */}
                <section className="flex-1 min-w-0 ">

                    {/* Top Navbar */}
                    <div className="flex items-center justify-between mb-3">

                    </div>


                    {/* Main Dashboard Area */}
                    <div className="w-full min-h-[calc(100vh-70px)] bg-white rounded-xl border border-gray-200 shadow-sm p-6">

                    </div>

                </section>

            </div>

        </div>
    );
};

export default Studentdashboard;
