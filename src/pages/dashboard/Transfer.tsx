import { Outlet } from "react-router-dom";
import TransactionsControllerCard from "../../components/ui/TransactionsControllerCard";

type Props = {};

const Transfer = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[90%] mx-auto p-4">
        <TransactionsControllerCard />
        {/* form */}
        <Outlet />
      </section>
    </div>
  );
};

export default Transfer;
