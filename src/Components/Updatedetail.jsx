import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate,useNavigate, useParams,Redirect, Routes, Link } from "react-router-dom";
import { updatedetailbyid } from "../api/AxiosRequest";
import Getdetailbyhooks from "../hooks/Getdetailbyhooks";
import { UpdateAction } from "../Redux/Action/Action";

const UpdateDetail=()=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const {id}=useParams();
    const [detailById]=Getdetailbyhooks(id);
    const dispatch=useDispatch();
    const isupdateResponse=useSelector((state)=>state.Reducer.isupdateresponse)
    console.log("detailbyid",detailById);


     
  
    const clickHandler=(e)=>{
        e.preventDefault();
     
        const update_data={
            
            name:name,
            email:email
        }
        dispatch(UpdateAction(update_data,id))


    }
    useEffect(()=>{
        const data=()=>{
            if(detailById.data){
                setName(detailById.data.name);
                setEmail(detailById.data.email)
            }
        }
        data();

    },[detailById])
    if(isupdateResponse){
        alert("success");
         
           return( <Navigate to="/"/>)
         
        
   
       
    }
   
    return(
        <>
            <div className="navbar" style={{backgroundColor:"teal",color:"white"}}>
            <div>
            Curd Operaton with Redux
            </div>
            <div>
                 <Link to="/" className="btn btn-primary">Home</Link> 
            </div>

        </div>
        <h1>  Update data Functionality</h1>
 
        <form onSubmit={(e)=>clickHandler(e)}>
            <input type="text" placeholder="Name" defaultValue={name}  onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit">Update</button>
        </form>
        </>
    )
}
export default UpdateDetail;