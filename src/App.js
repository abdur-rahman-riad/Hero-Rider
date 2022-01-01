import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import LoginDashboard from './Pages/Login/LoginDashboard/LoginDashboard';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <LoginDashboard />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
