import {Link} from "react-router-dom"


export default function Footer (){


    return  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Make Decision Wisely</h5>
          <p class="grey-text text-lighten-4">Add Prize Bond First</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!"><Link to="/NewInvestments"> Make Investments </Link></a></li>
            <li><a class="grey-text text-lighten-3" href="#!">   <Link to="/ViewUsers"> View Users </Link></a></li>
            <li><a class="grey-text text-lighten-3" href="#!"><Link to="/AddBonds"> Bonds </Link></a></li>
            <li><a class="grey-text text-lighten-3" href="#!"><Link to="/">Go To Home Page </Link> </a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2014 Copyright Text
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
}