import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

function Users() {
  const [users, setusers] = useState([{}]);
  const [filter, setFilter] = useState("");

  async function getuserByFilter() {
    const res = await axios.get(`http://localhost:5000/api/v1/users/bulk?filter=${filter}`);
    setusers([...res.data.users]);
  }

  useEffect(() => {
    getuserByFilter();
  }, [filter]);

  return (
    <div className="p-2">
      <div className="font-bold text-xl gap-y-3">Users</div>
      <div className="mt-3">
        <input
          type="text"
          onChange={e => { setFilter(e.target.value) }}
          placeholder="Search users..."
          className="w-full py-2 px-2 border-2 rounded-md border-slate-500"
        />
      </div>
      <div>
        {users.map((user) => {
          return <User key={user.id} user={user} />
        })}
      </div>
    </div>
  );
}

export default Users;
