import { useState } from "react";
import Navbar from "./components/Navbar";

type UserType = {
  name: string;
  email: string;
};
const getUserDetails = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user");
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
export default async function Home() {
  const user: UserType = await getUserDetails();

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-slate-950 text-white md:text-4xl flex justify-center items-center md:font-bold">
        <h1>Home</h1>
        <div>
          <div>name : {user.name}</div>
          <div>email : {user.email}</div>
        </div>
      </div>
    </div>
  );
}
