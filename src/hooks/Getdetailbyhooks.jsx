import { useEffect, useState } from "react";
import { Getdetailbyid } from "../api/AxiosRequest";

export default (props)=>{
    const [detailById,setDetailById]=useState({});
    const Getdetetailbyhooks=(requestid)=>{
         
            return Getdetailbyid(requestid).then((res)=>{
                console.log("fetch",res)
                setDetailById(res)
                
            })
        
       
    }
    useEffect(()=>{
        Getdetetailbyhooks(props);
    },[])
    return[detailById]

}

