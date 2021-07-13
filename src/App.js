import './App.css';
import AddUsers from "./Components/Add Users/AddUsers"
import ViewUsers from "./Components/View Users/ViewUsers"
import AddBonds from "./Components/Add Bonds/AddBonds"
import NewInvestments from "./Components/Investments/Investment"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import {Route,BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import store from "./Store/store"

function App() {
  return  <div>
   <BrowserRouter>
    < Provider store={store}>
      <Navbar />
      <hr />
    <Route exact path="/" component={AddUsers} />
    <Route  path="/ViewUsers" component={ViewUsers} />
    <Route  path="/AddBonds" component={AddBonds} />
    <Route  path="/NewInvestments" component={NewInvestments} />
    <hr />
    <Footer />
      </Provider>
      </BrowserRouter >
  </div>
   
}

export default App;
