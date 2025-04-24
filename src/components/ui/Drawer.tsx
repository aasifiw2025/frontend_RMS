import React from "react";
import { IoMdClose } from "react-icons/io";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-500 ease-linear delay-75 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="relative h-full w-[280px] bg-white shadow-xl z-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <IoMdClose size={24} />
        </button>
        <div className=" p-4 overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
