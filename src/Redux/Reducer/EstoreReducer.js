import { Store_details, Store_detailsId } from "../Type"

const initialstate={
    store:[],
     
    isLoading:false
}
const EstoreReducer=(state=initialstate,action)=>{
    switch(action.type){
        case Store_details:
            return{
                
                store:action.payload.data,
                isLoading:action.payload.isLoading      
            }
            case Store_detailsId:
                return{
                    store:action.payload.data,
                    isLoading:action.payload.isLoading


                }
            default:return state;
    }
}

export default EstoreReducer;
