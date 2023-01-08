import React from "react";
import { useHistory } from "react-router";
import ImgBag from "../../assets/img/bag.png";
export default function Header() {
  let user = JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push("/Signin");
  }

  return (
    <>
      <header>
        <div class="header-container">
          <h2 class="art-and-soul">
            <a href="/">Art and Soul</a>
          </h2>
          {localStorage.getItem("LOGIN_USER_KEY") ? null : (
            <div class="right-side-nav">
              <a class="sign-in title-icon navbar-brand" href="/signin">
                Sign In
              </a>
            </div>
          )}
          {localStorage.getItem("LOGIN_USER_KEY") ? (
            <div>
                <a class="sign-in title-icon navbar-brand" href="/signin" onClick={logOut}>
                Logout
              </a>
              <a class="sign-in title-icon navbar-brand" href="/cart">
                <img class="bag" alt="" src={ImgBag} />
              </a>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}