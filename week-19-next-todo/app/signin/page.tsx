"use client";

import { useState } from "react";

function Signin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center p-10 bg-red-200 w-[30%] rounded-lg border border-red-200">
        <div className="flex flex-col gap-y-5 w-full">
          <input
            className="p-2 text-black rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            type="text"
          />

          <input
            className="p-2 text-black rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
        </div>

        <div className="mt-5">
          <button className="border-white py-3 px-8 rounded-md bg-orange-500">
            signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;

// (auth) -> create folder like this it will didnt consider this as the route will just skip this take its insede jsx || its inside foler as route part
// [id] -> create folder like this basically this is dynamic field.
// eg: basically /api/v1/users/:id -> like here is id dynamic.
// [...params] -> basically this will take list of params api/v1/users/:id/:slug => ["id", "slug"].

// ssr => server side rendering [component server side rendering is seo optimised].
// csr => client side rendering [client side component render server side but hydrate on client side].

// hydration => basically dont use any variables values like timestamps and all.
