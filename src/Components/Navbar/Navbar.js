import {Link} from "react-router-dom"


export default function navbar(){


    return   <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Make Your Investment</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html"><Link to="/NewInvestments"> Make Investments </Link></a></li>
        <li><a href="badges.html">    <Link to="/ViewUsers"> View Users </Link></a></li>
        <li><a href="collapsible.html"><Link to="/AddBonds"> Bonds </Link></a></li>
        <li><a href="collapsible.html"><div> <Link to="/">Go To Home Page </Link> </div></a></li>
      </ul>
    </div>
  </nav>
}