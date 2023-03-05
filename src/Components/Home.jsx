 import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {DeleteAction, GetAction} from "../Redux/Action/Action";
const Home=()=>{
    const dispatch=useDispatch();
    const data=useSelector(state=>state.Reducer.todotask);
    const isDeleteresponse=useSelector(state=>state.Reducer.isdeleteresponse);
    console.log(data);
    useEffect(()=>{
        dispatch(GetAction())

    },[dispatch])

    if(isDeleteresponse){
      alert("your data has been delete");
      window.location.reload();
    }
    return(
        <>
        <h1>Curd Operaton with redux</h1>
        <div >
         <Link style={{margin:"10px"}} to="/form" className="btn btn-primary">Add data</Link>        
        < Link to="/estore" className="btn btn-primary">Estore</Link> 
        </div>
 

<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col"> edit </th>
      <th scope="col"> delete </th>
    </tr>
  </thead>
  <tbody>
  {data?
    data.map((item)=>(
  <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>{item.name} </td>
      <td>{item.email}</td>
     <td><Link to={`/update/${item.id}`}>Edit</Link></td>
     
     <td  className="text-danger delete" onClick={()=>dispatch(DeleteAction(item.id))}> Delete </td>
    </tr>
 ))
 :null
}
      
  </tbody>
</table>
        </> 
    )
}
export default Home;
