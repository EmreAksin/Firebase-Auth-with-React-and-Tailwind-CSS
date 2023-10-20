import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  // Function to create a new user account with email and password
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigateTo("/login");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-900 text-white p-10 rounded-lg shadow-md max-w-2xl w-96  text-center">
        <h1 className="text-2xl  mb-10">Welcome! Please Sign up</h1>
        <input
          className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring focus:ring-blue-400"
          type="text"
          placeholder="Email.."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-200  text-gray-900 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring focus:ring-blue-400"
          type="password"
          placeholder="Password.."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/login" className=" underline text-sm mb-8 pb-4">
          Already have an account or want to sign in with Google?
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg  mt-4 p-4 w-full focus:outline-none focus:ring focus:ring-blue-400"
          onClick={signUp}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Register
