import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import useLoginPage from "./useLoginPage";

const LoginPage: FC = () => {
  const { error, email, password, signIn, setEmail, setPassword } =
    useLoginPage();

  return (
    <>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={signIn} name="login_form">
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account yet?{" "}
        <NavLink to="/register" replace>
          rigester
        </NavLink>{" "}
      </p>
    </>
  );
};

export default LoginPage;
