import { useEffect, useState } from "react";
import Appbar from "../component/Appbar";
import Balance from "../component/Balance";
import Users from "../component/Users";

function Dashboard() {
  const [token, setToken] = useState();

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  //   // if (token === null || token.length == 0) {
      
  //   // } 
  // }, []);

  return (
    <div className="flex flex-col gap-y-3">
      <Appbar />
      <Balance value={10000} />
      <Users />
    </div>
  )
}

export default Dashboard;
