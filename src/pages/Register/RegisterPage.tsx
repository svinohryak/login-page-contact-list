import { FC } from "react";
import { NavLink } from "react-router-dom";
import useRegisterPage from "./useRegisterPage";
import PasswordStrenghBar from "../../components/PasswordStrenghBar/PasswordStrenghBar";

const RegisterPage: FC = () => {
  const {
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
  } = useRegisterPage();

  return (
    <>
      <h2>Register</h2>
      <div>{error}</div>
      <form onSubmit={register} name="registration_form">
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          autoComplete="nope"
          required
          onChange={(e) => validateEmail(e)}
        />

        <div style={{ width: "175px" }}>
          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => validatePassword(e)}
          />

          <PasswordStrenghBar
            strengthLevel={passwordMessage}
            passwordStatus={passwordStatus}
          />
        </div>

        <input
          type="password"
          value={confirmPassword}
          required
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" disabled={isButtonDisabled}>
          Register
        </button>
      </form>
      <div>{emailStatus.message}</div>
      <div> {passwordMessage}</div>
      <p>
        Already have an account?{" "}
        <NavLink to="/login-page-contact-list/login" replace>
          Login
        </NavLink>{" "}
      </p>
    </>
  );
};

export default RegisterPage;
