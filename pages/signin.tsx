import TextInput from "@/components/Inputs/TextInput";
import WideButton from "@/components/Buttons/WideButton";
import Image from "next/image";
import TransparentButton from "@/components/Buttons/TransparentButton";

export default function Signin() {
  return (
    <>
      <div className="flex flex-col items-center w-[85vw] mx-[7.5vw] my-[4vh] font-inter">
        <Image
          src="/logodtask.svg"
          width={139}
          height={91}
          alt="Picture of the author"
          className="pb-[55px]"
        />
        <h1 className="font-semibold text-white self-start text-xl pb-[17px] leading-4">
          Welcome Back!
        </h1>
        <TextInput
          src="/emailuser.svg"
          title="Email Address"
          placeholder="abcde@gmail.com"
          type="email"
        />
        <TextInput
          src="/lock.svg"
          title="Password"
          placeholder=""
          type="password"
        />

        <WideButton>Log In</WideButton>

        <div className="flex flex-row items-center mt-[47px] mb-[37px] w-[100%] text-[#8CAAB9] font-medium">
          <div className="border border-[#8CAAB9] h-0 grow"></div>
          <p className="px-1">Or continue with</p>
          <div className="border border-[#8CAAB9] h-0 grow"></div>
        </div>
        <TransparentButton>Google</TransparentButton>
        <p className="mt-[25px] text-[#8CAAB9] font-medium">
          Don´t have an account?{" "}
          <a href="" className="text-[#FED36A] ">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
}
