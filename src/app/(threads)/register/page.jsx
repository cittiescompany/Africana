"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "@/api/auth";
import { AxiosError } from "axios";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { user } from "@nextui-org/react";

const page = () => {
  const { mutateAsync: signup, isPending } = useSignupMutation();
  const toast = useToast();
  const {authenticate} = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const password = watch("password");

  const submit = async (values) => {
    try {
      delete values.confirmPassword;
      const res = await signup(values);
      authenticate({user:res.data.user,token:res.data.token});
      toast.success({ message: "Successfully signed up" });
    } catch (e) {
      if (e instanceof AxiosError) {
        return toast.error({
          message:
            e.response?.data?.message ?? e.response?.data ?? "Error signing up",
        });
      }
      toast.error({ message: "Error signing up" });
    }
  };
  return (
    <section className="flex py-11 flex-col items-center  w-full h-screen">
      <main className=" w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 ">
        <h1 className="text-center text-5xl">Citties</h1>
        <form onSubmit={handleSubmit(submit)} className="mt-16">
          <h3 className="opacity-60 font-[Inter] font-bold text-blue-800 font-bold text-xl">
            Create a new profile
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
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="opacity-70">
              Confirm Password
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none  w-full text-[#000000] border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="text"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              disabled={isPending}
              placeholder=""
              type="text"
            />
            {errors?.confirmPassword?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.confirmPassword?.message}
              </p>
            )}
          </div>
          <p className="mt-10 text-[1rem] opacity-60">
            By using Citties, you agree to our E-sign Disclosure and Consent
            Notice, Privacy Policy, and User Agreement.
          </p>

          <button
            disabled={isPending}
            type="submit"
            className={`w-full h-[50px]  text-[1.1rem] mt-10  bg-[#2753c2] text-white transition-all duration-150 ease-in-out ${ isPending?'opacity-20':''}`}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">OR</div>
        <button className="w-full h-[50px]  border-2 border-gray-400 text-[1.1rem] mt-10  bg-[#FFF] text-[#2753c2] hover:bg-[#2753c2] hover:text-white transition-all duration-150 ease-in-out">
          Continue with Google
        </button>
        <button className="w-full h-[50px] border-2 border-gray-400 text-[1.1rem] mt-6  bg-[#FFF] text-[#2753c2] hover:bg-[#2753c2] hover:text-white transition-all duration-150 ease-in-out">
          Continue with Apple
        </button>
        <div className="flex mb-20 mt-10 gap-2 opacity-75 justify-center">
          <p>Already have an account? </p>
          <Link href="/login" className="underline text-blue-500">
              Sign In
          </Link>
        </div>
      </main>
    </section>
  );
};

export default page;
