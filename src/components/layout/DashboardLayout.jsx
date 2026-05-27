import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
