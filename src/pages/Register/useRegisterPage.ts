import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reucers/userSlice";
import { passwordStrengthChecker } from "../../helpers/password-strength-checker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useAutoFocus from "../../hooks/useAutoFocus";

const useRegisterPage = () => {
  const dispatch = useAppDispatch();
  const { signInUser } = userSlice.actions;
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState({
    message: "",
    isValid: false,
  });
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMassege] = useState("");
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const history = useNavigate();

  const inputRef = useAutoFocus();

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
    const { status, strength, hasRestrictedSymbol } =
      passwordStrengthChecker(passwordValue);
    status
      ? setPasswordMassege(strength)
      : setPasswordMassege("Must be at least 6 characters long");
    if (hasRestrictedSymbol) {
      setPasswordMassege(
        "Only latin letters, numbers and special characters (#?!@$%^&*-=) are allowed"
      );
    }
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
    // setIsLoading(true);
    if (validateMatchingPassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch(signInUser());
          setIsLoading(false);

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
    isLoading,
    error,
    email,
    password,
    confirmPassword,
    emailStatus,
    passwordMessage,
    passwordStatus,
    isButtonDisabled,
    inputRef,
    register,
    validatePassword,
    setConfirmPassword,
    validateEmail,
  };
};

export default useRegisterPage;
