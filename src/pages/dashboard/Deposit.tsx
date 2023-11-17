import { Outlet } from "react-router-dom";
import TransactionsControllerCard from "../../components/ui/TransactionsControllerCard";

type Props = {};

const Deposit = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[90%] mx-auto p-3">
        <TransactionsControllerCard />
        {/* outlet */}
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Deposit;
