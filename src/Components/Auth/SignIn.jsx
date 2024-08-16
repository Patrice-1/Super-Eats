import React from 'react'

function SignIn() {
  return (
    <div className=" grid items-center px-8 py-4 my-2">
      <div>
        <h1 className="text-4xl mb-8">Sign In</h1>
      </div>
      <div className="border rounded-lg p-3 w-full">
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mt-2 rounded-lg"
        />
        <button
          type="submit"
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>

      <p className="text-xl mt-4">
        Please enter your email and password to Sign In.
      </p>
    </div>
  );
}

export default SignIn;