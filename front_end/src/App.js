import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/navbar";

// Pages
import landingPage from "./pages/landingPage";
import SearchResult from "./pages/SearchResult";
import FlatDetails from "./pages/FlatDetails";
import AddFlat from "./pages/AddFlat";

function App() {
  return (
    <div className="App">
      <Nav />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route path="/search-result" component={SearchResult} />
          <Route path="/flat-details" component={FlatDetails} />
          <Route path="/add-flat" component={AddFlat} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
