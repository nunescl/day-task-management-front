/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import WideButton from "@/components/Buttons/WideButton";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

export default function Home(): React.ReactElement {
  const router: NextRouter = useRouter();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>DayTask</title>
      </Head>
      <div className="flex flex-col items-center space-y-12 w-[85vw] mx-[7.5vw] my-[4vh]">
        <Image
          src="/logodtask.svg"
          width={62}
          height={93}
          alt="Picture of the author"
          className="self-start"
        />
        <div className="bg-white w-[85vw] flex justify-center">
          <Image
            src="/mandesk.svg"
            width={320}
            height={320}
            alt="Picture of the author"
            className="self-center"
          />
        </div>
        <div className="font-pilatDemi text-5xl w-[100%]">
          <h1 className="text-[#FFFFFF]">
            Manage <br /> your <br /> Task with
          </h1>
          <h1 className="text-[#FED36A]">DayTask</h1>
        </div>

        <WideButton
          onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
            handleClick(e, "/signin")
          }
        >
          Let's Start
        </WideButton>
      </div>
    </>
  );
}
