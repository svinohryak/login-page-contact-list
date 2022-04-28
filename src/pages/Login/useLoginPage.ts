import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reucers/userSlice";
import useAutoFocus from "../../hooks/useAutoFocus";

const useLoginPage = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { signInUser } = userSlice.actions;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inputRef = useAutoFocus();
  const auth = getAuth();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(signInUser());
        history("/login-page-contact-list/");
      })
      .catch((error) => {
        setError("Incorrect username or password.");
      });
  };

  return {
    error,
    email,
    password,
    inputRef,
    handleSignIn,
    setEmail,
    setPassword,
  };
};

export default useLoginPage;
