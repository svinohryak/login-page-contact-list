import { FC } from "react";
import { NavLink } from "react-router-dom";
import useRegisterPage from "./useRegisterPage";
import PasswordStrenghBar from "../../components/PasswordStrenghBar/PasswordStrenghBar";
import * as CommonStyled from "../../common styles/styles";

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
    <CommonStyled.Form>
      <h1>Register</h1>
      <div>{error}</div>
      <form onSubmit={register} name="registration_form">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          autoComplete="nope"
          required
          onChange={(e) => validateEmail(e)}
        />
        <div>{emailStatus.message}</div>

        <label htmlFor="password">Password</label>
        <input
          id="password"
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
        <div> {passwordMessage}</div>
        <label htmlFor="confirm password">Confirm password</label>
        <input
          id="confirm password"
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

      <p>
        Already have an account?{" "}
        <NavLink to="/login-page-contact-list/login" replace>
          Login
        </NavLink>{" "}
      </p>
    </CommonStyled.Form>
  );
};

export default RegisterPage;
