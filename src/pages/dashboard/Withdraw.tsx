import { Outlet } from "react-router-dom";
import TransactionsControllerCard from "../../components/ui/TransactionsControllerCard";

type Props = {};

const Withdraw = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[90%] p-3 mx-auto">
        <TransactionsControllerCard />
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Withdraw;
