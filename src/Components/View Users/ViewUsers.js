import { connect } from 'react-redux'
import store from "../../Store/store"
import {Link} from "react-router-dom"
 function ViewUsers(props){


    return <div class="user_container">
        <table> <tr><td>Names</td><td>Amount</td><td>Bonds</td></tr>

           { props.userReducer.map((item)=>{
        return    <tr><td>{item.name}</td>
                 <td>{item.amount}</td>
                 <td>{item.bonds}</td>
                 </tr>
            })}
            </table>
        
        </div>
        
}


let NewViewUsers =  connect((store)=>{
    return store
})(ViewUsers);
export default NewViewUsers
