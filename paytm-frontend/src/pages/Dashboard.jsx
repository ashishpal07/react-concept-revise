import Appbar from "../component/Appbar";
import Balance from "../component/Balance";
import Users from "../component/Users";

function Dashboard() {
  return (
    <div className="flex flex-col gap-y-3">
      <Appbar />
      <Balance value={10000} />
      <Users />
    </div>
  )
}

export default Dashboard;
