import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
