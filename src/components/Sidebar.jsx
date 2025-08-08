import React from "react";
import { FaPlusCircle, FaListUl, FaBox } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div
            className="
        min-h-screen border-r transition-all duration-300
        sm:w-56 w-auto
        flex flex-col sm:items-start items-center
        p-2
      "
        >
            <div className="space-y-3 w-full sm:w-full flex flex-col sm:items-stretch items-center">

                {/* Add Items */}
                <button
                    className="
    flex items-center
    sm:justify-start justify-center
    sm:gap-2 gap-0
    sm:border sm:px-3 px-0
    py-3
    sm:w-full w-auto
    hover:shadow-md
    hover:text-blue-600
    hover:border-blue-600
    hover:rounded-xl
    hover:cursor-pointer
    hover:transition-all
    hover:duration-300
    hover:bg-gray-100
  "
                >
                    <FaPlusCircle className="text-lg" />
                    <span className="hidden sm:inline ml-2">Add Items</span>
                </button>

                {/* List Items */}
                <button
                    className="
    flex items-center
    sm:justify-start justify-center
    sm:gap-2 gap-0
    sm:border sm:px-3 px-0
    py-3
    sm:w-full w-auto
    hover:shadow-md
    hover:text-blue-600
    hover:border-blue-600
    hover:rounded-xl
    hover:cursor-pointer
    hover:transition-all
    hover:duration-300
    hover:bg-gray-100
  "
                >
                    <FaListUl className="text-lg" />
                    <span className="hidden sm:inline ml-2">List Items</span>
                </button>


                {/* Orders */}
                <button
                    className="
    flex items-center
    sm:justify-start justify-center
    sm:gap-2 gap-0
    sm:border sm:px-3 px-0
    py-3
    sm:w-full w-auto
    hover:shadow-md
    hover:text-blue-600
    hover:border-blue-600
    hover:rounded-xl
    hover:cursor-pointer
    hover:transition-all
    hover:duration-300
    hover:bg-gray-100
  "
                >
                    <FaBox className="text-lg" />
                    <span className="hidden sm:inline ml-2">Orders</span>
                </button>

            </div>
        </div>
    );
};

export default Sidebar;
