import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen bg-slate-950 flex justify-center items-center  ">
      <div className="bg-slate-700 p-6 rounded-md hover:shadow-md  hover:shadow-slate-600">
        <form>
          <h1 className=" text-slate-100 hover:text-green-400 font-semibold text-3xl text-center mb-5">
            Login
          </h1>
          <div className="flex-col flex gap-1">
            <label>
              <span className="text-base text-white">username</span>
            </label>
            <input
              type="text"
              placeholder="username@email.com"
              className="rounded-sm p-1 "
            ></input>
          </div>
          <div className="flex-col flex gap-1">
            <label>
              <span className="text-base text-white">password</span>
            </label>
            <input
              type="text"
              placeholder="Pass@929"
              className="rounded-sm p-1"
            ></input>
          </div>
          <div className="pt-3">
            <a href="/auth/signup">
              <span className="text-base text-blue-500 hover:underline">
                Don't have an account?
              </span>
            </a>
          </div>
          <div className="flex justify-center my-5">
            <button
              type="submit"
              className="bg-slate-400 text-white hover:bg-slate-300 p-2 text-xl w-full rounded-md"
            >
              <span className="text-xl font-semibold text-slate-900 ">
                Login
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
