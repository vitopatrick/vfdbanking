import AccountSummary from "../../components/ui/AccountSummary";
import TransactionsControllerCard from "../../components/ui/TransactionsControllerCard";
import TransactionsList from "../../components/ui/TransactionsList";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[90%] p-3 mx-auto">
        {/* flex container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem]">
          <div className="col-span-2 w-full">
            <TransactionsControllerCard />
          </div>

          <AccountSummary />

          {/* Transaction summary */}
        </div>
        <TransactionsList />
      </section>
    </div>
  );
};

export default Home;
