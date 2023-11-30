"use client";
import login from "@/controllers/login";
import { FormEvent, useState } from "react";

export default function Login() {
  const inputStyle = "border-1 border-black p-2";
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await login();
      console.log("Login successful:", result);
    } catch (error) {
      if (error instanceof Error && error.message) {
        console.error("Login failed:", error.message);
      } else {
        console.error("An unknown error occurred during login");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <div>Type your username</div>
          <input
            placeholder="username"
            type="text"
            name="username"
            required
            className={inputStyle}
            onChange={(e) => handleChange(e)}
          />
          <div>Type your Password</div>
          <input
            placeholder="password"
            type="password"
            name="password"
            required
            className={inputStyle}
            onChange={(e) => handleChange(e)}
          />
          <button className="p-2 text-bold m-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
