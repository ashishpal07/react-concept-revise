import { useState } from "react";
import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  async function signupHandler() {
    try {
      const res = await axios.post("http://localhost:5000/api/v1/signup", user);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("error while sign up user");
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
              onChange={(e) => {
                setUser({
                  ...user,
                  firstName: e.target.value,
                });
              }}
              label={"First name"}
              placeholder={"Jhon"}
            />

            <InputBox
              onChange={(e) => {
                setUser({
                  ...user,
                  lastName: e.target.value,
                });
              }}
              label={"Last Name"}
              placeholder={"Doe"}
            />
            <InputBox
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
              label={"Email"}
              placeholder={"user@example.com"}
            />
            <InputBox
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
              label={"Password"}
              placeholder={"123456"}
            />
            <Button onClick={signupHandler} label={"Sign up"} />
            <BottomWarning
              label={"Already have an account ?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
