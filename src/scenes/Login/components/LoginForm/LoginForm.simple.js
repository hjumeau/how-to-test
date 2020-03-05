import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginComponent = ({errorMessage, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" data-testid="username-label">USERNAME</label>
        <Field id="username" name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">PASSWORD</label>
        <Field id="password" name="password" component="input" type="password" />
      </div>
      <button id="sign-in-submit" style={{marginTop: 40}} type="submit">Connexion</button>
      {!!errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
    </form>
  );
};

export const LoginForm = reduxForm({ form: "signin" })(LoginComponent);
