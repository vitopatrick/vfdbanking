import { Outlet } from "react-router-dom";
import SideNav from "../../components/sideNav/SideNav";
import Header from "../../components/ui/Header";
import { useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useAuth } from "../../hooks/useAuth";

type Props = {};

const Dashboard = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { userState: user, loading } = useFetchUser();

  useAuth();

  return (
    <>
      <div className="flex h-screen">
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
