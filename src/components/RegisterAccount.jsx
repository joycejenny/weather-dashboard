import React from "react";

const RegisterAccount = () => {
  return (
    <form className="RegisterAccount-container">
      <h2 class="registerText">Register</h2>

      <label htmlFor="first-name">First name</label>
      <input type="text" title="first-name" name="first_name" />

      <label htmlFor="last-name">Last name</label>
      <input type="text" title="last-name" name="last_name" />

      <label htmlFor="email">Email address</label>
      <input type="email" title="email" name="email" />

      <label htmlFor="password">Enter password</label>
      <input type="password" title="password" name="password" />

      <label htmlFor="confirm-password">Confirm password</label>
      <input type="password" title="confirm-password" name="confirm_password" />

      <button className="submit-Btn" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default RegisterAccount;
