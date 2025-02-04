import React from 'react';
import { motion } from 'framer-motion';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-0 h-[96vh] rounded-2xl bg-white shadow-lg w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-2/3 flex flex-col m-4"
      >
        {/* <div className="p-4 border-b flex justify-end">
          <button className="text-red-500" onClick={onClose}>
            Close
          </button>
        </div> */}

        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
