import axios from "axios"
const axiosrequest=(url,method,headers,params)=>{
    return params
    
    ? axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    })
    :
    axios({
        url:url,
        method:method,
        headers:headers,
        data:[]
    })


}



const getfakeapi=()=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosrequest(`https://jsonplaceholder.typicode.com/posts?_limit=10`,"GET",headers,{}) 
}
export default getfakeapi;


