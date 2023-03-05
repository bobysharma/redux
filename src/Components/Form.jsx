import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAction } from "../Redux/Action/Action";

const Form=()=>{
   const dispatch= useDispatch()
   const isResponse=useSelector((state)=>state.Reducer.isresponse)
     
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const clickHandler=(e)=>{
        e.preventDefault();
        const alldetail={
            name:name,
            email:email
        }
        console.log(alldetail);
        dispatch(PostAction(alldetail))
    }
   if(isResponse){
    alert("succecss");
   }
    return(
        <>
        <div className="navbar" style={{backgroundColor:"teal",color:"white"}}>
            <div>
            Curd Operaton with redux
            </div>
            <div>
                 <Link to="/" className="btn btn-primary">Home</Link> 
            </div>

        </div>
        <h1>  Add data Functionality</h1>
        <form onSubmit={(e)=>clickHandler(e)}>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit">add</button>
        </form>
        </>
    )
} 
export default Form;
