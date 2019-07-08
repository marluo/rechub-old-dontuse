import React, { Fragment, useState } from "react";
import { Icon } from "@rmwc/icon";
import "./Navbare.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./test.png";
import AuthModal from "./AuthModal";
import avatar from "./avatar.png";
import { showModal, showMobileMenu } from "../actions/modalActions";

const Navbare = ({
  showModal,
  showMobileMenu,
  auth: { isAuthed, firstName, lastName, role, loading, user }
}) => {
  const lol = "qweqweqwe";
  return (
    <div class="header-container">
      <AuthModal />
      <header class="header">
        <div className="header-stuff">
          <a class="brand-container" href="localhost:5000">
            <img class="brand-img" src={logo} />
          </a>
        </div>
        <div class="header-title">
          <h2>RECHUB</h2>
        </div>
        <nav class="nav">
          <ul class="nav-items">
            {/* laddas om inte är inloggad */}
            {isAuthed && role === "recruiter" ? (
              <li>
                <Link to={`/myads/`}>My Ads</Link>
              </li>
            ) : null}
            {isAuthed && role === "recruiter" ? (
              <li>
                <Link to={`/post/ad`}>Post Ad</Link>
              </li>
            ) : null}
            {isAuthed && !role === "worker" ? (
              <li>
                <Link to={`/myapplications/`}>My Applications</Link>
              </li>
            ) : null}
            <li class="mobile-menu" onClick={showMobileMenu}>
              <img src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-3a/100/1-48-512.png" />
            </li>
            <li>
              {!isAuthed && loading ? (
                <button
                  onClick={() => showModal()}
                  className="login-button-navbar"
                >
                  LOGIN/REGISTER
                </button>
              ) : (
                <Link to={`/profile/${user._id}`} className="link-flex">
                  <img class="avatar" src={avatar} />
                  <span>Marcus Lundgren</span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  {
    showModal,
    showMobileMenu
  }
)(Navbare);
