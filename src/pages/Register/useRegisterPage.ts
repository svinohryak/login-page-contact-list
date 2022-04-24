import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reucers/userSlice";
import { passwordStrengthChecker } from "../../helpers/password-strength-checker";
import { createUserWithEmailAndPassword } from "firebase/auth";

const useRegisterPage = () => {
  const dispatch = useAppDispatch();
  const { signInUser } = userSlice.actions;
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState({
    message: "",
    isValid: false,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMassege] = useState("too short");
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    setError("");
  }, [email, password, confirmPassword]);

  useEffect(() => {
    const result = passwordStatus && emailStatus.isValid;
    setIsButtonDisabled(!result);
  }, [passwordStatus, emailStatus]);

  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mail = event.target.value;
    setEmail(mail);
    if (EmailValidator.validate(mail)) {
      setEmailStatus({
        ...emailStatus,
        message: "",
        isValid: true,
      });
    } else {
      setEmailStatus({
        ...emailStatus,
        message: "Email is invalid",
        isValid: false,
      });
    }
  };

  const validatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    const { status, strength } = passwordStrengthChecker(passwordValue);
    status ? setPasswordMassege(strength) : setPasswordMassege("too short");
    setPasswordStatus(status);
  };

  const validateMatchingPassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (validateMatchingPassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch(signInUser());
          history("/login-page-contact-list");
        })
        .catch((error) => {
          error.message.includes("email-already-in-use")
            ? setError("This email already in use")
            : setError("Something went wrong");
          console.log(error.message);
        });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return {
    error,
    email,
    password,
    confirmPassword,
    emailStatus,
    passwordMessage,
    passwordStatus,
    isButtonDisabled,
    register,
    validatePassword,
    setConfirmPassword,
    validateEmail,
  };
};

export default useRegisterPage;
