import Image from "next/image";
import React from "react";

const TextInput = (props: any) => {
  return (
    <div className="pb-[27px] text-[#8CAAB9]">
      <h2 className="font-inter text-base pb-4">{props.title}</h2>
      <div className="flex bg-[#455A64] w-[85vw] h-16">
        <Image
          src={props.src}
          width={24}
          height={24}
          alt="Picture of the author"
          className="mx-4"
        />
        <input
          className="bg-[#455A64] w-[100%] h-[100%] pl-2 outline-0 text-white"
          placeholder={props.placeholder}
          type={props.type}
        />
        {props.type == "password" ? (
          <button>
            <Image
              src="/eyeslashed.svg"
              width={24}
              height={24}
              alt="Picture of the author"
              className="mr-6"
            />
          </button>
        ) : null}
      </div>
      {props.type == "password" && props.signin == true ? (
        <div className="flex flex-row-reverse mt-1">
          <a href="">Forgot Password?</a>
        </div>
      ) : null}
    </div>
  );
};

export default TextInput;
