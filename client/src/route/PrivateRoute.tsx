// import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";

const PrivateRoute = ()=>{
  const username = true

  return (
    username?<Outlet/>:<Navigate to="/login"/>
 )
}

export default PrivateRoute