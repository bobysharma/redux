import getfakeapi from "../../api/Fakeapirequest";
import { Fake_Api_details } from "../Type";



const fakeapiaction=()=>{
    return function(dispatch){
        return getfakeapi().then((res)=>{
            console.log("action",res.data);
            dispatch({
                type:Fake_Api_details,
                payload:res.data

            })

        })
    }
    
    
}
export default fakeapiaction;