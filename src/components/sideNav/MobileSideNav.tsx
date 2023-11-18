import {
  LayoutDashboard,
  User,
  Receipt,
  CandlestickChart,
  ArrowDownToLine,
  LogOut,
  CreditCard,
  EuroIcon,
  ChevronLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Dispatch, SetStateAction } from "react";

type controls = {
  isBarOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
};

const links = [
  {
    path: "home",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "account",
    title: "Account",
    icon: <User />,
  },
  {
    path: "deposit",
    title: "Online Deposit",
    icon: <Receipt />,
  },
  {
    path: "transfer",
    title: "Transfer",
    icon: <CandlestickChart />,
  },
  // {
  //   path: "card",
  //   title: "Virtual Card",
  //   icon: <CreditCard />,
  // },
  {
    path: "withdraw",
    title: "Withdraw",
    icon: <ArrowDownToLine />,
  },
  // {
  //   path: "loan",
  //   title: "Loan",
  //   icon: <EuroIcon />,
  // },
];

const MobileSideNav = ({ isBarOpen, close }: controls) => {
  // Navigation
  const Navigation = useNavigate();

  // sign out of firebase
  const signOutOfApp = async () => {
    await signOut(auth);

    localStorage.removeItem("token");

    Navigation("/");
  };

  return (
    <>
      <div className="space-y-[2rem] w-[250px] bg-slate-900 md:hidden block h-screen">
        <div className="flex items-end justify-end mx-4 py-2">
          <button
            className="flex font-min text-blue-50 py-2"
            onClick={() => close(!isBarOpen)}
          >
            <ChevronLeft />
          </button>
        </div>
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.title}
            onClick={() => close(!isBarOpen)}
            className="text-blue-50 flex gap-3 items-center  font-min font-light hover:bg-blue-900 rounded p-4 transition-all ease-in"
          >
            <span>{link.icon}</span>
            <p>{link.title}</p>
          </Link>
        ))}

        <button
          onClick={signOutOfApp}
          className="flex gap-3 items-center font-min font-light text-blue-50 p-4 rounded hover:bg-blue-900 transition-all ease-in w-full"
        >
          <LogOut />
          logout
        </button>
      </div>
    </>
  );
};

export default MobileSideNav;
