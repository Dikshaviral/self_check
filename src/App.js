import './App.css';
import Home from './Home';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Section_1 from './Section_1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Section_5 from './Section_5';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Switch>    
      <Route path="/Step_five">
          <Section_5/>
        </Route>
        <Route path="/Step_four">
          <Section_4/>
        </Route>
        <Route path="/Step_three">
          <Section_3/>
        </Route>
        <Route path="/Step_two">
          <Section_2/>
        </Route>
        <Route path="/Step_one">
        <Section_1/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
     
    
    </div>
     </BrowserRouter>
  );
}

export default App;
