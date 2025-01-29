import { useState } from "react";
import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();

  async function signinHandler() {
    try {
      console.log(login);
      
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/signin",
        login,
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("Error while login");
      return error;
    }
  }

  return (
    <div className="h-screen border-2 border-slate-800 flex justify-center items-center">
      <div className="border border-black">
        <div className="border-2 border-black p-10 rounded-lg">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />

            <InputBox
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
              label={"Username"}
              placeholder={"user@example.com"}
            />
            <InputBox
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              label={"Password"}
              placeholder={"123456"}
            />

            <Button onClick={signinHandler} label={"Sign up"} />
            <BottomWarning
              label={"No not have an account ?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
