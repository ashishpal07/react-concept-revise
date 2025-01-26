import { Button } from "./Button";

function User({ user }) {
  return (
    <div className="flex justify-between items-center mt-3 p-2">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <button className="px-4 py-2 border border-black rounded-md bg-black text-white font-semibold"> Send Money </button>
      </div>
    </div>
  );
}

export default User;
