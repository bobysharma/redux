import { getApidetailStore, getApidetailStorebyid } from "../../api/AxiosRequest"
import { Store_details, Store_detailsId } from "../Type"


const getEstorApi=()=>{
   

    return function(dispatch) {
     
        return  getApidetailStore().then((res)=>{
            dispatch({
                type:Store_details,
                payload:{
                    data:res.data,
                    isLoading:true,
                }
            })
        }) 
            
        
    }
}

const getEstoreApiid=(id)=>{
    return function(dispatch){
        dispatch({
            type:Store_detailsId,
            payload:{
                data:[],
                isLoading:false,
            }
        })
        return getApidetailStorebyid(id).then((res)=>{
            dispatch({
                type:Store_detailsId,
                payload:{
                    data:res.data,
                    isLoading:true,
                }
            })
        })
    }

}
 
export  {getEstorApi,getEstoreApiid};