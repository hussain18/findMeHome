import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/navbar'

// Pages
import landingPage from './pages/landingPage'

function App() {
  return (
    <div className="App">

      <Nav/>

      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={landingPage} />
          {/* <Route path = "/someRoute"/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
