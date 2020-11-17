import React from "react";
import MembershipForm from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Pricing from "./components/service/Pricing/Pricing";
import OurClasses from "./components/service/OurClasses/OurClasses";
import AdvanceGym from "./components/service/AdvanceGym/AdvanceGym";
import Home from "./components/home/Home/Home";
import Navbar from "./components/HomePage/Navbar/Navbar";
import Feature from "./components/HomePage/Feature/Feature";
import AboutUs from "./components/HomePage/AboutUs/AboutUs";
import TrainingSession from "./components/HomePage/TrainingSession/TrainingSession";
import ChooseUs from "./components/home/ChooseUs/ChooseUs";
import FooterX from "./components/HomePage/FooterX/FooterX";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <MembershipForm />
          </Route>
          <Route path="/services">
            <OurClasses />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path ="/advanceGym">
            <AdvanceGym/>
          </Route>
          <Route path ="/home">
            <Home/>
          </Route>

{/* /homeX , added by nayeem */}

          <Route path ="/homex">
            <Navbar/>
            <Feature/>
            <AboutUs/>
            <TrainingSession/>
            <ChooseUs/>
            <FooterX/>
          </Route>


          <Route path="/">
            <h2>this is home page.</h2>
            <Link to="/homeX">Home Page</Link>
            <br />
            <Link to="/form">form</Link>
            <br/>
            <Link to="/pricing">pricing</Link>
            <br />
            <Link to="/services">our services</Link>
            <h3>Testing</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
