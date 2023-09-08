import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  // Ensure that currentUser is correctly defined in your Redux state
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
          {/* Assuming Picture is a custom component */}
          {/* <Picture></Picture> */}
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {/* Conditional rendering based on currentUser */}
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
