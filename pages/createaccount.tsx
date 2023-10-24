import TransparentButton from "@/components/Buttons/TransparentButton";
import WideButton from "@/components/Buttons/WideButton";
import TextInput from "@/components/Inputs/TextInput";
import Image from "next/image";

export default function CreateAccount() {
  return (
    <>
      <div className="flex flex-col items-center w-[85vw] mx-[7.5vw] mt-[1vh] font-inter">
        <Image
          src="/logodtask.svg"
          width={139}
          height={91}
          alt="Picture of the author"
          className="pb-[49px]"
        />
        <h1 className="font-semibold text-white self-start text-xl pb-[17px]">
          Create your account
        </h1>
        <TextInput
          src="/user.svg"
          title="Full Name"
          placeholder=""
          type="email"
        />
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
        {/* <div className="flex gap-2 mt-[-10px] mb-[33px]">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FED36A] checked:bg-[#FED36A] checked:before:bg-[#FED36A] hover:before:opacity-10"
          ></input>
          <label className="text-sm text-[#8CAAB9] text-justify">
            I have read & agreed to DayTask{" "}
            <a href="" className="text-[#FED36A]">
              Privacy Policy, Terms & Condition
            </a>
          </label>
        </div> */}

        <div className="inline-flex items-center mt-[-10px] mb-[33px]">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            data-ripple-dark="true"
          >
            <input
              id="login"
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FED36A] checked:bg-transparent  hover:before:opacity-10"
            />
            <div className="absolute text-[#FED36A] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <label className="text-sm text-[#8CAAB9] text-justify">
            I have read & agreed to DayTask{" "}
            <a href="" className="text-[#FED36A]">
              Privacy Policy, Terms & Condition
            </a>
          </label>
        </div>
        <WideButton>Sign Up</WideButton>

        <div className="flex flex-row items-center mt-[47px] mb-[37px] w-[100%] text-[#8CAAB9] font-medium">
          <div className="border border-[#8CAAB9] h-0 grow"></div>
          <p className="px-1">Or continue with</p>
          <div className="border border-[#8CAAB9] h-0 grow"></div>
        </div>
        <TransparentButton>Google</TransparentButton>
        <p className="mt-[25px] mb-[20px] text-[#8CAAB9] font-medium">
          Already have an account?{" "}
          <a href="" className="text-[#FED36A] ">
            Log In
          </a>
        </p>
      </div>
    </>
  );
}
