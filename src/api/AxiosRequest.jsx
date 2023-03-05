import axios from "axios"


const axiosRequest=(url,method,headers,params)=>{
    return params 
    ?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):
    axios({
        url:url,
        method:method,
        headers:headers,
        data:[]
    })

}
const getApidetail=()=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`http://localhost:8080/todo`,"GET",headers,{})
}
const postApidetail=(data)=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`http://localhost:8080/todo`,"POST",headers,data)
}



const Getdetailbyid=(id)=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`http://localhost:8080/todo/${id}`,"GET",headers,{})
}




const updatedetailbyid=(data,id)=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`http://localhost:8080/todo/${id}`,"PUT",headers,data)
}

const deleteApidetail=(id)=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`http://localhost:8080/todo/${id}`,"DELETE",headers,{})
}


const getApidetailStore=()=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`https://fakestoreapi.com/products`,"GET",headers,{})
}
const getApidetailStorebyid =(id)=>{
    const headers={
        "content-type":"application/json"
    }
    return axiosRequest(`https://fakestoreapi.com/products/${id}`,"GET",headers,{})
}
export {getApidetail,postApidetail,Getdetailbyid,updatedetailbyid,deleteApidetail,getApidetailStore,getApidetailStorebyid};