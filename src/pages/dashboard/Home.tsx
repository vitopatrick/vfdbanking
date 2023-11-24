import AccountSummary from "../../components/ui/AccountSummary";
import BalanceCard from "../../components/ui/BalanceCard";
import TransactionsControllerCard from "../../components/ui/TransactionsControllerCard";
import TransactionsList from "../../components/ui/TransactionsList";
import { useFetchUser } from "../../hooks/useFetchUser";
import { toDollar, toEuro, toRupees } from "../../lib/convertCurrency";

type Props = {};

const Home = (props: Props) => {

  const { userState: user }: any = useFetchUser();

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
        {/* Card */}
        {user && (
          <div className="grid grid-cols-1 md:grid-cols-3 my-[2rem] gap-4">
            <BalanceCard
              title="USD balance"
              amount={toDollar(user.accountBalance)}
            />
            <BalanceCard
              title="EUR balance"
              amount={toEuro(user.accountBalance)}
            />
            <BalanceCard
              title="INR balance"
              amount={toRupees(user.accountBalance)}
            />
          </div>
        )}
        <TransactionsList />
      </section>
    </div>
  );
};

export default Home;
