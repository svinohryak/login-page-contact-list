import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import useLoginPage from "./useLoginPage";
import * as CommonStyled from "../../common styles/styles";

const LoginPage: FC = () => {
  const { error, email, password, signIn, setEmail, setPassword } =
    useLoginPage();

  return (
    <CommonStyled.Form>
      <h1>Please Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={signIn} name="login_form">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account yet?{" "}
        <NavLink to="/login-page-contact-list/register" replace>
          Register
        </NavLink>{" "}
      </p>
    </CommonStyled.Form>
  );
};

export default LoginPage;
