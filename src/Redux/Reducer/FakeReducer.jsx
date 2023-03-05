import { Fake_Api_details } from "../Type"

const initial_state={
    post:[]
}

const FakeReducer=(state=initial_state,action)=>{
    switch(action.type){

        case Fake_Api_details:
            return{
                post:action.payload
            }
            default :return state;
        }

}
export default FakeReducer;