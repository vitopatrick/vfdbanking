import { AuthContext } from "../context/AuthContext";
import { useState, useContext, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

type UserDetails = {};

export const useFetchUser = () => {
  // context api
  const { user }: {} | null | any = useContext(AuthContext);

  const [userState, setUserState] = useState<UserDetails | null>();
  const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState(false);

  // use Memo hook to fetch user
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      setLoading(true);
      try {
        const userRef = doc(db, "user", `${user.email}`);
        const userFound = await getDoc(userRef);
        setUserState({ ...userFound.data() });
      } catch (error: any) {
        console.error("Error fetching user:", error);
        setError(error.message || "An error occurred");
      }

      setLoading(false);
    }

    // run the function
    fetchUser();
    return () => controller.abort();
  }, [user.email]);

  const sideEffects = {
    error,
    loading,
  };

  return { ...sideEffects, userState };
};
