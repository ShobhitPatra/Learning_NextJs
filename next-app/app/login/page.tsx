import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="h-screen bg-slate-950 flex justify-center items-center  ">
        <div className="bg-slate-700 p-6 rounded-md ">
          <form>
            <h1 className="text-base text-white font-semibold md:text-3xl text-center mb-5">
              Login
            </h1>
            <div className="flex-col flex gap-1">
              <label>
                <span className="text-base text-white">username</span>
              </label>
              <input type="text" className="rounded-sm"></input>
            </div>
            <div className="flex-col flex gap-1">
              <label>
                <span className="text-base text-white">password</span>
              </label>
              <input type="text" className="rounded-sm"></input>
            </div>

            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="bg-slate-500 text-white hover:bg-slate-400 p-2 text-xl w-full rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
