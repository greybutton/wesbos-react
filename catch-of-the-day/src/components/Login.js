import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log in with GitHub
    </button>
    <button className="github" onClick={() => props.authenticate("Twitter")}>
      Log in with Twitter
    </button>
    <button className="github" onClick={() => props.authenticate("Facebook")}>
      Log in with Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
