import { Delete_details, Get_details, Post_details, Update_details } from "../Type"

// const initialstate={
//     details:[
//         {
//             id:1,
//             name:"boby",
//             email:"boby@gmail.com"
//         },
//         {
//             id:2,
//             name:"ravi",
//             email:"ravi@gmail.com"
//         },
//         {
//             id:3,
//             name:"pradip",
//             email:"pradip@gmail.com"
//         },
//         {
//             id:4,
//             name:"ram",
//             email:"ram@gmail.com"
//         },
//     ]
// }
const initialstate={
    todotask:[],
    isresponse:false,
    isupdateresponse:false,
    isdeleteresponse:false,
}
const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case Get_details:
            return{
                todotask: action.payload
            }
            case Post_details:
            return{
                isresponse: action.payload
            }
            case Update_details:
                return{
                    isupdateresponse:action.payload
                }
                case Delete_details:
                    return{
                        isdeleteresponse:action.payload

                    }
            default :return state;
    }

}
export default Reducer;