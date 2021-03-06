import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "@material/typography/dist/mdc.typography.css";
import { Typography } from "@rmwc/typography";
import Background from "./backgroundx.png";
import { connect } from "react-redux";
import JobAds from "./JobAds";
import { withRouter } from "react-router-dom";
import { login } from "../actions/authAction";
import { hideModal } from "../actions/modalActions";

const LoginModal = ({
  showBackdrop,
  showLogin,
  email,
  password,
  onChange,
  setToggleRegister,
  onSubmit,
  hideModal,
  auth: { error }
}) => {
  return (
    <Fragment>
      <div
        className={`backdrop ${showBackdrop}`}
        onClick={() => {
          hideModal();
          setToggleRegister(false);
        }}
      />
      <div className="modal-container">
        <div className={`modal-login ${showLogin}`}>
          <div className="login-text" />
          <form className="login-form" onSubmit={event => onSubmit(event)}>
            <h2>LOGIN TO RECHUB</h2>
            <div className="role-wrapper">
              <select className="role-input">
                <option value="recruiter">Recruiter</option>
                <option value="recruiter">Prospect</option>
              </select>
            </div>
            <div className="email-wrapper">
              <input
                placeholder="Email"
                type="email"
                // name är det som react känner igen och identiferar med
                name="email"
                // value så att det skrivs in
                value={email}
                onChange={event => onChange(event)}
                className="email-input"
                required
              />
            </div>
            <div className="password-wrapper">
              <input
                placeholder="Password"
                type="text"
                // name är det som react känner igen och identiferar med
                name="password"
                // value så att det skrivs in
                value={password}
                onChange={event => onChange(event)}
                className="password-input"
                required
              />
            </div>
            {error ? error : ""}
            <input type="submit" className="login-button" value="Login" />
            <div className="signup">
              <p
                onClick={() =>
                  setToggleRegister({
                    showRegister: true
                  })
                }
              >
                Sign up
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

LoginModal.propTypes = {};

export default LoginModal;
