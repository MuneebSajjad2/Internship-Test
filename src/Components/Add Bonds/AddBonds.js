import store from "../../Store/store"
import {useRef} from "react"
import {Link} from "react-router-dom"


export default function AddBonds(){
        let bondValue = useRef();
        function AddedBonds(e){
            e.preventDefault()
            let newBond = {
                bondValue : bondValue.current.value,
                id : new Date().getTime(),
                
            }
            alert("Bonds is added Successfully")
            store.dispatch({
                type:"new_Bond_data",
                payload:newBond
            })
        }

    return <div class="container_bonds">
        <form onSubmit={AddedBonds}>
        <input type="number" ref={bondValue} placeholder="Enter Bond Amount" />
        <button> Submit </button>
        </form>

    </div>
}