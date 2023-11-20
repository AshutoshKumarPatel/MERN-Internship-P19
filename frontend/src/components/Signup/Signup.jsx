import React from "react";

// Import your signup background image
import signupImage from "../../assets/signup.png";

const Signup = () => {
  const wrapperStyle = {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    display: "flex",
    height: "70vh",
    width: "60vw",
  };

  const formStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#755adf",
  };

  const imageStyle = {
    flex: "1",
    background: `url(${signupImage}) center/auto no-repeat`,
  };

  return (
    <div style={wrapperStyle}>
      <div
        className="rounded-2xl shadow-2xl overflow-hidden"
        style={containerStyle}
      >
        {/* Form Side */}
        <div style={formStyle}>
          <h2 className="text-3xl font-bold mb-6">Signup</h2>
          <form>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-100 mb-1"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your first name"
            />

            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-100 mb-1"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your last name"
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-100 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your email"
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-100 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your password"
            />

            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-100 mb-1"
            >
              Type:
            </label>
            <input
              type="type"
              id="type"
              name="type"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your User type"
            />

            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded"
            >
              Signup
            </button>
          </form>
        </div>

        {/* Image Side */}
        <div style={imageStyle}></div>
      </div>
    </div>
  );
};

export default Signup;
