import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getEstorApi} from "../Redux/Action/EstoreAction";

const Estore=()=>{
   const dispatch=useDispatch();
   const data=useSelector(state=>state.EstoreReducer.store) ;
   const isLoading=useSelector(state=>state.EstoreReducer.isLoading);
   console.log("estore",data)
   useEffect(()=>{
    dispatch(getEstorApi())

   }, )
   console.log(isLoading);
   if(isLoading){
      return(
        <>
            <h1>EStore</h1>
            <div className="Main-container">
                
                {data? 
                data.map((el)=>(
                <div key={el.id}>
                    <img src={el.image}/>
                    <h6>{el.category}</h6>

                    <h5>Name:{el.title}</h5>
                     
                    <h6  >Price:{el.price}</h6>
                    <Link to={`/singleproduct/${el.id}`} className="btn btn-primary">Quick view</Link> 
                    
                    
                </div>
                )):null
}

            </div>
         
        </>
    ) 
}
else
{
    return<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
}
}
 
 
export default Estore;
