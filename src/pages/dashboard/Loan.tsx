import { Outlet } from "react-router-dom";
import TransactionsControllerCard from "../../components/ui/TransactionsControllerCard";

type Props = {};

const Loan = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[90%] mx-auto p-3">
        <TransactionsControllerCard />
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Loan;
