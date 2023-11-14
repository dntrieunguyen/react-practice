import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
      <>
         <nav className="bg-gray-800">
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
               <div className="relative flex items-center justify-between h-16">
                  <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                     <div className="flex items-center flex-shrink-0">
                        <img
                           className="w-auto h-8"
                           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                           alt="Your Company"
                        />
                     </div>
                     <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                           <NavLink
                              to="/"
                              className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
                              aria-current="page"
                           >
                              Dashboard
                           </NavLink>
                           <NavLink
                              to="Team"
                              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                           >
                              Team
                           </NavLink>
                           <NavLink
                              to="Projects"
                              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                           >
                              Projects
                           </NavLink>
                           <NavLink
                              to="Calendar"
                              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                           >
                              Calendar
                           </NavLink>
                           <NavLink
                              to="Form"
                              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                           >
                              Form
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
}

export default Navbar;
