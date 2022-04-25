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
      {error && (
        <CommonStyled.ErrorMessageBox>{error}</CommonStyled.ErrorMessageBox>
      )}
      <form onSubmit={register} name="registration_form">
        <label htmlFor="email">Email address</label>
        <CommonStyled.Input
          id="email"
          type="email"
          value={email}
          autoComplete="nope"
          required
          onChange={(e) => validateEmail(e)}
        />
        <CommonStyled.StrengthLevelBox>
          <div className="strength-title">{emailStatus.message}</div>
        </CommonStyled.StrengthLevelBox>

        <label htmlFor="password">Password</label>
        <CommonStyled.Input
          id="password"
          type="password"
          value={password}
          required
          onChange={(e) => validatePassword(e)}
        />

        <PasswordStrenghBar
          strengthLevel={passwordMessage}
          passwordStatus={passwordStatus}
        />
        <label htmlFor="confirm password">Confirm password</label>
        <CommonStyled.Input
          id="confirm password"
          type="password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <CommonStyled.FromButton type="submit" disabled={isButtonDisabled}>
          Register
        </CommonStyled.FromButton>
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
