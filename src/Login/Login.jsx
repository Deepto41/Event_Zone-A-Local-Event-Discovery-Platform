import React, { use } from "react";
import { Link } from "react-router";
import "./Login.css";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet-async";

const Login = () => {

  const { logIn, CreateUserWithGoogle } = use(AuthContext);
  console.log(logIn);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // CreateUserWithGoogle()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="max-w-sm mx-auto mt-4 mb-4">
        <Helmet>
                <title>Event_Zone || Login</title>
            </Helmet>
      <form onSubmit={handleLogin}>
        {/* Email field */}
        <div className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-6">
          <h2 className="text-3xl font-bold text-center">Login Now!</h2>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />

          {/* password field */}
          <label className="label">Password</label>
          <label className="input validator">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <p>Forget Password?</p>

          <button className="btn btn-neutral mt-4 mb-1">Login</button>
          <p>
            New to this site? Please{" "}
            <Link className="text-blue-400" to="/regester">
              Regester
            </Link>{" "}
          </p>
        </div>
      </form>
      <small className="text-center flex justify-center items-center text-md mt-2">
        Login With
      </small>

      <div className="flex gap-3 mt-2 justify-center items-center">
        <button onClick={CreateUserWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google
        </button>

        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
