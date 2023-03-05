import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getApidetailStorebyid } from "../api/AxiosRequest";
import { getEstoreApiid } from "../Redux/Action/EstoreAction";
import Tilt from "react-parallax-tilt";
const SingleProduct=()=>{
    const{id}=useParams();
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.EstoreReducer.store);
    const isLoading=useSelector(state=>state.EstoreReducer.isLoading);
    console.log(data);
    useEffect(()=>{
         
        dispatch(getEstoreApiid(id));
       
    

    },[dispatch])
    if(isLoading){
    return(
        <>
        <h1>single product page </h1>
        <Link to={`/estore`} className="btn btn-primary">go to store</Link> 
        <div className="MainCartdiv">
           
           
            <div className="imageSection">
            <Tilt glareEnable={true} tiltMaxAngleX={20} 
        tiltMaxAngleY={20} perspective={1000} 
        glareColor={"rgb(255,0,0)"}>
             <img style={{ width:"100%"}} src={data.image}/> 
             </Tilt>

            </div>
            <div className="ContentDiv">
                <h3>Name: <span style={{color:"1px"}}> {data.title}</span></h3>
                <p>Discription:<span>{ data.description}</span></p>
                <h4>Price<span>{data.price}</span></h4>
                {/* <h6>Rating:{data.rating.rate} Count:{data.rating.count}</h6> */}
            </div>

        </div>
        </>
    )
    }
    else{
        return<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
    }
}
export default SingleProduct;