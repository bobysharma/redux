import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fakeapiaction from "../Redux/Action/FakeApiaction";

const Fakeapi=()=>{
    const dispatch=useDispatch();
    const responsedata=useSelector(state=>state.FakeReducer.post);
    console.log(responsedata)
        useEffect(()=>{
            dispatch(fakeapiaction())

        },[])
    return(
        <>
        <h1>fake Api data</h1>
        <div className="grid-Container">
        {
           
            responsedata.map((item)=>{return(
                
                    <div className="innerdiv" key={item.id}>
                        <h3>{item.title}</h3>
                        <h5>{item.body}</h5>
                         
                    </div>
                     
                     


                
            )
            })
            
        }
        </div>


        </>
    )
}
export default  Fakeapi;
