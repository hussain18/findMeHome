import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/navbar";

// Pages
import landingPage from "./pages/landingPage";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className="App">
      <Nav />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route path="/search-result" component={SearchResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
