import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  async function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user);
    });
  }

  return (
    <div className=" grid items-center px-8 py-4 my-2">
      <div>
        <h1 className="text-4xl">Sign Up</h1>
        <p className="text-2xl py-8">
          Create a new account by filling out the form below.
        </p>
      </div>
      <div className="border rounded-lg p-3 w-full">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
          className="w-full p-2 rounded-lg"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          className="w-full p-2 mt-2 rounded-lg"
        />
        <button
          onClick={() => {
            handleSignUp;
          }}
          type="submit"
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>

      <p className="text-xl mt-4">
        Please enter your email and password to create a new account.
      </p>
    </div>
  );
}

export default SignUp;
