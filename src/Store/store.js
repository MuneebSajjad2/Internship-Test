
import { combineReducers, createStore } from 'redux';

let intitialDAta = [
    {
    name:"Muneeb",
    amount: 100000,
    bond:""
},
    {
        name:"Usman",
        amount:50000,
        bond:""
    },
    {
        name:"Ali",
        amount:70000,
        bond:""
    }

];
let intitialBondsDAta = [
   {
    bondValue:50000
   }

];


function userReducer(state = intitialDAta, action) {

    state = [...state]  

    if(action.type === "new_user_data"){
        state.push(action.payload)
        console.log(state)
    }

    if(action.type === "bonds_purchsed"){
        state[action.payload].bonds = (action.bonds);
        (state[action.payload].amount) = +(state[action.payload].amount) - +(action.bonds) ;

    }

    

    return state;
}

function dataReducer(state = intitialBondsDAta, action) {
    state = [...state];
    if(action.type === "new_Bond_data"){
        state.push(action.payload)
        console.log(state)
    }

    return state
}

let allReducer = combineReducers({ dataReducer, userReducer });
let store = createStore(allReducer);
export default store;

