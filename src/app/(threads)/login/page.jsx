"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/api/auth";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

const page = () => {
  const { mutateAsync: login, isPending } = useLoginMutation();
  const toast = useToast();
  const {authenticate} = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const submit = async (values) => {
    try {
      const res = await login(values);
      authenticate({user:res.data.user,token:res.data.token});
      toast.success({ message: "Successfully logged in" });
    } catch (e) {
      if (e instanceof AxiosError) {
        return toast.error({ message:e.response?.data?.message ?? e.response?.data ?? "Error signing in",});
      }
      toast.error({ message: "Error signing in" });
    }
  };
  return (
    <section className="flex py-11 flex-col items-center  w-full h-screen">
      <main className=" w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 ">
        <h1 className="text-center text-5xl">Africana</h1>
        <form onSubmit={handleSubmit(submit)} className="mt-16">
          <h3 className="opacity-60 text-blue-800 font-bold text-2xl">
            Welcome back
          </h3>
          <div className="mt-4 flex flex-col ">
            <label htmlFor="" className="opacity-70">
              Email Address
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none w-full text-[#000000] border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              })}
              placeholder="Enter email or username"
              type="text"
              disabled={isPending}
            />
            {errors?.email?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="opacity-70">
              Password
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none  w-full text-[#000000] border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="text"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              placeholder=""
              type="text"
              disabled={isPending}
            />
            {errors?.password?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={`w-full h-[50px]  text-[1.1rem] mt-10  bg-[#2753c2] text-white transition-all duration-150 ease-in-out ${ isPending?'opacity-20':''}`}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">OR</div>
        <button className="w-full h-[50px]  border-2 border-gray-400 text-[1.1rem] mt-10  bg-[#FFF] text-[#2753c2] hover:bg-[#2753c2] hover:text-white transition-all duration-150 ease-in-out">
          Continue with Google
        </button>
        <button className="w-full h-[50px]  border-2 border-gray-400 text-[1.1rem] mt-6  bg-[#FFF] text-[#2753c2] hover:bg-[#2753c2] hover:text-white transition-all duration-150 ease-in-out">
          Continue with Apple
        </button>
        <div className="flex mb-20 mt-10 gap-2 opacity-75 justify-center">
          <p>Create an acount </p>
          <Link href="/register" className="underline text-blue-500">
             Sign up
          </Link>
        </div>
      </main>
    </section>
  );
};

export default page;
