import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
