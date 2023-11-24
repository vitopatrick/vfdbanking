import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const [error, setError] = useState();

  // auth context
  const { user }: any = useContext(AuthContext);
  useEffect(() => {
    const controller = new AbortController();
    const fetchTransactions = async () => {
      // create collectionRef
      const collectionRef = collection(
        db,
        "/user",
        `${user.email}`,
        "transactions"
      );
      const q = query(collectionRef, orderBy("date", "desc"));

      const transactionsArray: any = [];

      onSnapshot(
        q,
        (docs) => {
          docs.forEach((doc) => {
            const data = doc.data();

            transactionsArray.push({
              approved: doc.data().approved,
              amount: parseInt(data.amount),
              date: new Date(data.date.toDate()).toDateString(),
              remark:
                doc.data().remarks ||
                doc.data().remark ||
                doc.data().reasonForLoan,
              type: data.type,
              id: doc.id,
            });
            setTransactions(transactionsArray);
          });
        },
        (error: any) => setError(error.code)
      );
    };

    fetchTransactions();

    return () => controller.abort();
  }, [user.email]);
  return { transactions, error };
};
