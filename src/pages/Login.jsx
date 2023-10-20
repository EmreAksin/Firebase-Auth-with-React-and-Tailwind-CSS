import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const signIn = async () => {
    try {
      // Attempt to sign in the user using their email and password
      await signInWithEmailAndPassword(auth, email, password);
      // If successful, navigate to the profile page
      navigateTo("/profile");
    } catch (err) {
      // Handle any errors that occur during the sign-in process
      console.error(err);
    }
  };

  // Function to sign in with Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigateTo("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-900 text-white p-10 rounded-lg shadow-md max-w-2xl w-96  text-center">
        <h1 className="text-2xl  mb-10">Welcome! Please Sign in</h1>
        <input
          className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring focus:ring-blue-400"
          type="text"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring focus:ring-blue-400"
          type="password"
          placeholder="Password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/register" className=" underline mb-4">
          If you do not have an account, register.
        </Link>
        <button
          className=" mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mb-2 w-full focus:outline-none focus:ring focus:ring-blue-400"
          onClick={signIn}
        >
          Sign in
        </button>
        <button
          className="bg-blue-600 hover-bg-blue-700 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-400"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
