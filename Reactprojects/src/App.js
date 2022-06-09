import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Base Components/Home";
import Myorders from "./Base Components/Myorders";
import Cart from "./Base Components/Cart";
import Detailpage from "./Base Components/Detailedpage";
import Orderplaced from "./Base Components/Orderplaced";
import Navigationbar from "./Base Components/Navbar"
import Fetchdb from "./FetchData";


// npx json-server --watch reacttask1\Database\products.json 

function App() {
  return (
    <React.Fragment>
      <Fetchdb />
      <Router>
        <Navigationbar/>
        
        
        <br />
        <div>
            <Switch>
              <Route exact path="/">
                <Homepage    /> 
              </Route>
              <Route path="/myorders">
                <Myorders />
              </Route>
              <Route path="/cart">
                <Cart  />
              </Route>
              <Route path="/products/:isbn">
                <Detailpage/>
              </Route>
              <Route path="/Ordercompleted">
                < Orderplaced />
              </Route>
            </Switch>
          </div>
        </Router>
    </React.Fragment>
  );
}
export default App;