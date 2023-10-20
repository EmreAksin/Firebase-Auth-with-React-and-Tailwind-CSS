import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    // Check if a user is currently authenticated
    if (auth.currentUser) {
      // If authenticated, set the user's email
      setUserEmail(auth.currentUser.email);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      // Attempt to sign the user out
      await signOut(auth);
      // If successful, navigate to the login page
      navigateTo("/login");
    } catch (error) {
      // Handle any errors that occur during the sign-out process
      console.error("An error occurred while logging out: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" p-4 text-white rounded-lg shadow-2xl ">
        <h2 className="text-2xl font-bold mb-4 max-sm:text-base ">
          Welcome, {userEmail || "No login"}!
        </h2>
      </div>
      <button
        className={`mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none ${
          userEmail ? "" : "invisible"
        } `}
        onClick={handleSignOut}
      >
        Logout
      </button>
      <button
        className={`mt-4 bg-blue-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none ${
          userEmail ? "invisible" : ""
        } `}
        onClick={handleSignOut}
      >
        <a href="/login">Please Login</a>
      </button>
    </div>
  );
};

export default Profile;
