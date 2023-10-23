import Image from "next/image";

const TransparentButton = (props: any) => {
  return (
    <button className="w-[100%] h-16 border-2 border-white flex flex-row justify-center items-center gap-x-2 text-white font-inter font-medium">
      <Image src="/logogoogle.svg" width={24} height={24} alt="Google Image" />
      {props.children}
    </button>
  );
};

export default TransparentButton;
