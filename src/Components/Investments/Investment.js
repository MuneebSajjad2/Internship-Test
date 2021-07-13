import { connect } from 'react-redux'
import store from "../../Store/store"
import {useRef} from "react"
import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
function Investments(props){
    let history = useHistory();
    let bondValue = useRef()
    function ShowAmount(){
    //  let newValue = bondValue.current.innerText;
     let myIndex = document.getElementById("mySelect").selectedIndex;
     let myAmount = props.userReducer[myIndex].amount
     let showAmount = document.getElementById("myAmount")
     showAmount.innerHTML = myAmount;
 }
function purchaseBonds(){
    let userAmount = document.getElementById("myAmount").innerHTML;
    let showAmount = +document.getElementById("bondvalue").innerHTML;
    if(userAmount >= showAmount){
        let myIndex = document.getElementById("mySelect").selectedIndex;
        store.dispatch({
            type:"bonds_purchsed",
            payload:myIndex,
            bonds:showAmount
            
        })
        alert("Bond is successfully Purchased")
        history.push("ViewUsers")
        showAmount= document.getElementById("bondvalue");
        showAmount.innerHTML = "";
    }else if(userAmount < showAmount || userAmount == 0 ){
        alert("Amount is not Enough for Bond Purchase");
    }
}



    

    return <div id="container"> 
        <select id="firstSelect" class="browser-default" id="mySelect" onChange={ShowAmount}  multiple >
        {props.userReducer.map((item)=>{
            return <option>{item.name}</option>

        })}
        </select>
        <h5>User Available balance</h5>
        <h5 id="myAmount"></h5>
       
        <div>
            <h5>Available Bond Amount</h5>
            {props.dataReducer.map((item)=>{
                return <h5 id="bondvalue" ref={bondValue}> {item.bondValue} </h5>
            })}
            </div>
            <button onClick={purchaseBonds}>Save</button>
        </div>
}



let NewInvestments =  connect((store)=>{
    return store
})(Investments);
export default NewInvestments
