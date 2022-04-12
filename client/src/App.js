import React, {useEffect, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Login from  "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from './components/dashboard/Dashboard';
import AboutUs from './components/aboutus/AboutUs';
import CourseSection from "./components/courses/CourseSection";
import ContactUs from './components/contactus/ContactUs';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Alert from "./components/Alert";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
      <ScrollToTop />
        <Fragment>
          <Header />
          <Alert></Alert>
        <Switch>
        <Route exact path="/" component={Landing} ></Route>
        <Route exact path="/register" component={Register} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/dashboard" component={Dashboard} ></Route>
        <Route exact path="/aboutus" component={AboutUs} ></Route>
        <Route exact path="/courses" component={CourseSection} ></Route>
        <Route exact path="/contactus" component={ContactUs} ></Route>
        </Switch>
          
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
