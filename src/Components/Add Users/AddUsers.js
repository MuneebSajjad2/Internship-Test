import {useRef} from "react"
import store from "../../Store/store"
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
export default function AddUsers(){

    let name = useRef();
    let amount = useRef();
    let history = useHistory();
        function saveUser (event){
            event.preventDefault();
             let newUser = {
                 name: name.current.value,
                 amount: amount.current.value
            }
            store.dispatch({
                type:"new_user_data",
                payload:newUser
            })
            history.push("/ViewUsers")

        }

    return  <div class="container_main">
        <form class="usersForm" onSubmit={saveUser}>
            <div>
        <input type="text" ref={name} placeholder="Enter Your Name" />
        </div>
        <div>
        <input type="number" ref={amount} placeholder="Enter Amount" />
        </div>
        <button>Save User</button>
        </form>
        
        </div>


}