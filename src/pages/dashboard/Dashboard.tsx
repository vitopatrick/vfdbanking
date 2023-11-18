import { Outlet } from "react-router-dom";
import SideNav from "../../components/sideNav/SideNav";
import Header from "../../components/ui/Header";
import { useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useAuth } from "../../hooks/useAuth";
import MobileSideNav from "../../components/sideNav/MobileSideNav";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Dashboard = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { userState: user, loading } = useFetchUser();

  useAuth();

  return (
    <>
      <div className="flex h-screen">
        <motion.div
          key={isOpen ? 0 : 1}
          initial={{
            translateX: -99,
          }}
          exit={{
            translateX: -99,
          }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 0.2,
          }}
          className={
            isOpen
              ? "bg-black/30 fixed top-0 right-0 left-0 bottom-0 h-screen"
              : "hidden"
          }
        >
          <MobileSideNav isBarOpen={isOpen} close={setIsOpen} />
        </motion.div>
        <SideNav isBarOpen={isOpen} />
        <div className="flex-1 min-h-0 overflow-y-scroll">
          <Header isBarOpen={isOpen} closeBar={setIsOpen} />
          {loading ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            user && <Outlet />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
