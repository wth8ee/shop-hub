import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const { signUp, user, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="w-screen flex justify-center">
      <div className="min-w-75 px-4 w-[max(300px,80vw)] sm:w-[80vw] flex justify-center">
        <div className="bg-white flex flex-col shadow px-4 py-6 rounded-xl w-[clamp(250px,50vw,350px)]">
          {mode === "signup" && (
            <h1 className="font-[chiron-sb] mb-6 md:text-3xl text-[24px]">
              Sign Up
            </h1>
          )}
          {mode === "login" && (
            <h1 className="font-[chiron-sb] mb-6 md:text-3xl text-[24px]">
              Login
            </h1>
          )}
          {error && <p className="text-red-500 text-lg mb-2">{error}</p>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-start"
          >
            <div className="flex flex-col w-full">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className="border mt-2 focus:outline-none w-full rounded-sm border-mauve-300 sm:px-4 sm:py-2 py-1 px-2 text-[14px]"
                type="email"
                id="email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Password must not exceed 15 characters",
                  },
                })}
                className="border mt-2 focus:outline-none w-full rounded-sm border-mauve-300 sm:px-4 sm:py-2 py-1 px-2 text-[14px]"
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {mode === "signup" ? (
              <button
                className="lg:px-4 cursor-pointer lg:py-2 px-3 py-2 sm:text-lg text-sm text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                type="submit"
              >
                Sign Up
              </button>
            ) : (
              <button
                className="lg:px-4 cursor-pointer lg:py-2 px-3 py-2 sm:text-lg text-sm text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                type="submit"
              >
                Login
              </button>
            )}
          </form>

          {mode === "signup" ? (
            <p className="w-full text-center text-[14px] mt-2">
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          ) : (
            <p className="w-full text-center text-[14px] mt-2">
              Don't have an account yet?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-blue-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
