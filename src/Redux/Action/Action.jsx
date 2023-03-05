import {deleteApidetail, getApidetail,postApidetail, updatedetailbyid} from "../../api/AxiosRequest";
import { Delete_details, Get_details,Post_details, Update_details } from "../Type";

const GetAction=()=>{
    return  function(dispatch){
        return getApidetail().then((res)=>{
            console.log("fetch",res)
            dispatch({
                type:Get_details,
                payload:res.data
            })
        })
    }
   
}


const PostAction=(request)=>{
    return  function(dispatch){
        dispatch({
            type:Post_details,
            payload:false 
        })
        return postApidetail(request).then((res)=>{
            console.log("fetch",res)
            dispatch({
                type:Post_details,
                payload:true 
            })
        })
    }
   
}
const UpdateAction=(request,id)=>{
    return  function(dispatch){
        dispatch({
            type:Update_details,
            payload:false 
        })
        return updatedetailbyid(request,id).then((res)=>{
            console.log("updatefetch",res)
            dispatch({
                type:Update_details,
                payload:true 
                })
        })
    }
   
}
const DeleteAction=(id)=>{
    return  function(dispatch){
        dispatch({
            type:Delete_details,
            payload:false 
        })
        return deleteApidetail(id).then((res)=>{
            console.log("updatefetch",res)
            dispatch({
                type:Delete_details,
                payload:true 
            })
        })
    }
   
}
 


export  {GetAction,PostAction,UpdateAction,DeleteAction};



























// import getApidetail from "../../api/AxiosRequest";
// import { Get_details } from "../Type";

// const Action=()=>{
     
//     return{
//         type:Get_details,
//         payload:''
//     }
// }
// export default Action;
