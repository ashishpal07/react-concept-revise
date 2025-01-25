"use client";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  async function register() {
    const response = await axios.post("/api/v1/users", {
      username,
      email,
      password,
    });
    return response.data;
  }

  return (
    <div className="bg-red-200 w-[30%] flex flex-col justify-center items-center p-8">
      <div className="flex flex-col gap-y-3 w-full">
        <input
          className="p-2 text-black rounded-md"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          type="text"
        />
        <input
          className="p-2 text-black rounded-md"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          type="text"
        />
        <input
          className="p-2 text-black rounded-md"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          type="password"
        />
      </div>

      <div className="mt-5">
        <button
          className="border-white py-3 px-8 rounded-md bg-orange-500"
          onClick={register}
        >
          signup
        </button>
      </div>
    </div>
  );
}

interface IRegisterCreateUser {
  username: string;
  email: string;
  password: string;
}

export default Signup;
