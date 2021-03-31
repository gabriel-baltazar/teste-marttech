import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produtos from './Pages/Produtos';
import Pedidos from './Pages/Pedidos';

const App = () => {
  return (
    <Router>
    
      <div>
        <Header />
        <Switch>
        <Route path="/produtos" component={Produtos} />
        <Route path="/pedidos" component={Pedidos} />
        </Switch>
      </div>
   
    </Router>
  );
}

export default App;
