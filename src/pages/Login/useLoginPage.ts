import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reucers/userSlice";

const useLoginPage = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { signInUser } = userSlice.actions;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const signIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        dispatch(signInUser());
        history("/login-page-contact-list/");
      })
      .catch((error) => {
        setError("invalid password or email");
      });
  };

  return {
    error,
    email,
    password,
    signIn,
    setEmail,
    setPassword,
  };
};

export default useLoginPage;
