import { FC, useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reucers/userSlice";
import { fetchUserContacts } from "../../store/reucers/actionCreators";
// import styled from "styled-components";

const HomePage: FC = () => {
  const { isSignIn } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const { signOutUser } = userSlice.actions;

  const { userContacts, error, isLoading } = useAppSelector(
    (state) => state.userContactsReducer
  );

  useEffect(() => {
    dispatch(fetchUserContacts());
  }, []);

  console.log(userContacts);

  const [userEmail, setUserEmail] = useState<string | null>("");

  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(signOutUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user?.email);
      }
    });
    return () => unsubscribe();
  }, []);

  return isSignIn ? (
    <>
      <h2>Welcome {userEmail}</h2>
      <button onClick={handleSignOut}>Log out</button>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
