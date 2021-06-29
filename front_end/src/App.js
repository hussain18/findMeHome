import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/navbar";
import signUp from "./pages/signup_page/signUp"
import SignIn from "./pages/signup_page/signIn"

// Pages
import landingPage from "./pages/landing_page/landingPage";

function App() {
  return (
    <div className="App">
      <Nav />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route path = "/signup" component={signUp}/>
          <Route path = "/sign_in" component={SignIn}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
