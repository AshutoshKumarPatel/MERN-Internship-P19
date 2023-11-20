// Import your login background image
import { useState } from "react";
import loginImage from "../../assets/login.png";
import axios from "axios";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login/", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  // const [firstName, setfirstName] = useState()
  // const [lastName, setlastName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [userType, setUserType] = useState()

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     axios.post('/api/auth/signup', {firstName, lastName, email, password, userType}).then(result => console.log(result)).catch(err => console.log(err))
  // }

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

  const imageStyle = {
    flex: "1",
    background: `url(${loginImage}) center/contain no-repeat`,
  };

  const formStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#8ad3ff",
  };

  return (
    <div style={wrapperStyle}>
      <div
        className="rounded-2xl shadow-2xl overflow-hidden"
        style={containerStyle}
      >
        <div style={imageStyle}></div>

        <div style={formStyle}>
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form onSubmit={HandleSubmit}>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              First name:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your first name"
              onChange={(e) => setemail(e.target.value)}
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your password"
              onChange={(e) => setpassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
