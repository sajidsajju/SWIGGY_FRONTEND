import React from "react";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import userLogin from "./components/forms/userLogin";
import restLogin from "./components/forms/restLogin";
import delLogin from "./components/forms/delLogin";
import Whoops404 from "./components/Whoops404";
import userRegister from "./components/forms/userRegister";
import restRegister from "./components/forms/restRegister";
import delRegister from "./components/forms/delRegister";
import userRecover from "./components/forms/userRecover";
import restRecover from "./components/forms/restRecover";
import delRecover from "./components/forms/delRecover";
import reset from "./components/forms/reset";
import resProducts from "./components/resProducts";
import map from "./components/maps";
import restDetails from "./components/restDetails";
import editItems from "./components/editItems";
import userPage from "./components/userPage";
import userMap from "./components/userMaps";
import userAdress from "./components/userAddress";
import userPageItems from "./components/userPageItems";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={userLogin} />
        <Route path={"/restaurantLogin"} component={restLogin} />
        <Route path={"/deliveryLogin"} component={delLogin} />
        <Route path={"/register"} component={userRegister} />
        <Route path={"/restRegister"} component={restRegister} />
        <Route path={"/delRegister"} component={delRegister} />
        <Route path={"/recover"} component={userRecover} />
        <Route path={"/restRecover"} component={restRecover} />
        <Route path={"/delRecover"} component={delRecover} />
        <Route path={"/reset/:type/:token"} component={reset} />
        <Route path={"/restaurant"} component={resProducts} />
        <Route path={"/map"} component={map} />
        <Route path={"/restaurant_address"} component={restDetails} />
        <Route path={"/restaurant_items/edit/:uid/:id"} component={editItems} />
        <Route path={"/home"}  component={userPage} />
        <Route path={"/user_map"} component={userMap} />
        <Route path={"/user_address"} component={userAdress} />
        <Route path={"/home_user/items/:id"} component={userPageItems} />
        <Route component={Whoops404} />
      </Switch>
    </Router>
  );
}

export default App;
