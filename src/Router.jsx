import React from "react";
import { Route, Switch } from "react-router";
import Signin from "./containers/Signin";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import Orderconfirm from "./containers/Orderconfirm";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signin"} component={Signin} />
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/checkout"} component={Checkout} />
        <Route exact path={"/thanks"} component={Orderconfirm} />

      </Switch>
    </>
  );
};
export default Router;
