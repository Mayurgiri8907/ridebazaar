import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form"
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Userlogin = () => {
  const [activeTab, setActiveTab] = useState("login");

  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showSignupPass, setShowSignupPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  

  const handleLogin = async (data) => {
  try {
    setLoading(true);

    const payload = {
      email: data.loginemail,
      password: data.loginpassword,
    };

    const res = await axios.post("/api/user/", payload);

    localStorage.setItem("token", res.data.token);

    toast.success("Login Successful ✅");

    reset();
    navigate("/");
    window.location.reload();

  } catch (err) {
    const message =
      err.response?.data?.message || "Login failed";

    toast.error(message);
  } finally {
    setLoading(false);
  }
};

const handleSignup = async (data) => {
  try {
    setLoading(true);

    const res = await axios.post("/api/user/singup", data);

    localStorage.setItem("token", res.data.token);
    toast.success("Signup Successful 🎉");

    reset();
    navigate("/"); // better UX
    window.location.reload();

  } catch (err) {
    const message =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Signup failed";

    toast.error(message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center overflow-auto">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 overflow-hidden">

        {/* 🔹 TITLE */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          {activeTab === "login" ? "Login Form" : "Signup Form"}
        </h2>

        {/* 🔹 TAB SWITCH */}
        <div className="relative flex border rounded-xl overflow-hidden mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-2 z-10 font-medium transition ${activeTab === "login" ? "text-white" : "text-black"
              }`}
          >
            Login
          </button>

          <button
            onClick={() => setActiveTab("signup")}
            className={`w-1/2 py-2 z-10 font-medium transition ${activeTab === "signup" ? "text-white" : "text-black"
              }`}
          >
            Signup
          </button>

          {/* SLIDER */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-blue-600 rounded-xl transition-all duration-300"
            style={{
              transform:
                activeTab === "signup"
                  ? "translateX(100%)"
                  : "translateX(0%)",
            }}
          />
        </div>

        {/* 🔹 FORMS CONTAINER */}
        <div className="relative w-full h-auto overflow-hidden">

          {/* LOGIN FORM */}
          <div
            className={`transition-all duration-300 ${activeTab === "login" ? "block" : "hidden"
              }`}
          >
            <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-xl outline-none focus:border-blue-500"
                {...register("loginemail")}
              />

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type={showLoginPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 border rounded-xl outline-none focus:border-blue-500"
                  {...register("loginpassword")}
                />
                <span
                  onClick={() => setShowLoginPass(!showLoginPass)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                >
                  {showLoginPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <p className="text-sm text-blue-500 cursor-pointer">
                Forgot password?
              </p>

              <button
                disabled={loading}
                className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center justify-center"
              >
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  "Login"
                )}
              </button>
                
              <p className="text-center text-sm">
                Not a member?{" "}
                <span
                  onClick={() => setActiveTab("signup")}
                  className="text-blue-500 cursor-pointer"
                >
                  Signup now
                </span>
              </p>
            </form>
          </div>

          {/* SIGNUP FORM */}
          <div
            className={`transition-all duration-300 ${activeTab === "signup" ? "block" : "hidden"
              }`}
          >
            <form className="space-y-4" onSubmit={handleSubmit(handleSignup)}>

              <input
                type="text"
                placeholder="your name"
                className="w-full p-3 border rounded-xl outline-none focus:border-blue-500"
                {...register("name")}
              />

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-xl outline-none focus:border-blue-500"
                  {...register("email")}
                />
                <span
                  onClick={() => setShowSignupPass(!showSignupPass)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                >
                  {showSignupPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">
                <input
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 border rounded-xl outline-none focus:border-blue-500"
                  {...register("password")}
                />
                <span
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                >
                  {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <button
                disabled={loading}
                className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center justify-center"
              >
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  "Singup"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;