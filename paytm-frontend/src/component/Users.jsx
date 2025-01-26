import { useState } from "react";
import User from "./User";

function Users() {
  const [users, setusers] = useState([
    {
      firstName: "Ashish",
      lastName: "Pal",
      id: 1,
    },
  ]);

  return (
    <div className="p-2">
      <div className="font-bold text-xl gap-y-3">Users</div>
      <div className="mt-3">
        <input
          type="text"
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
