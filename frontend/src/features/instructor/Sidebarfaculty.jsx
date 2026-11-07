import React from 'react'

import {
    LayoutDashboard,
    TrendingUp,
    BookOpen,
    GraduationCap,
    ClipboardList,
    Award,
    User,
    LogOut
} from 'lucide-react';

const menuItems = [
    { name: "Overview", path: "/instructor/overview", icon: LayoutDashboard },
    { name: "Progress", path: "/instructor/progress", icon: TrendingUp },
    { name: "Browse Course", path: "/instructor/browsecourses", icon: BookOpen },
    { name: "My Course", path: "/instructor/mycourses", icon: GraduationCap },
    { name: "Assignments", path: "/instructor/assignments", icon: ClipboardList },
    { name: "Certificates", path: "/instructor/certificates", icon: Award },
    { name: "Profile", path: "/instructor/profile", icon: User }
];

const Sidebarfaculty = () => {
  return (
    <aside className="w-[18%] min-w-[220px] h-[calc(100%-12px)] bg-white border border-gray-200 rounded-xl p-5 flex flex-col">

            <nav className="flex flex-col gap-2">

                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/student/dashboard"}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                                ${
                                    isActive
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                                }`
                            }
                        >
                            <Icon size={19} />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}

            </nav>

            <button className="mt-auto flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg">
                <LogOut size={19} />
                Logout
            </button>

        </aside>
  )
}

export default Sidebarfaculty
