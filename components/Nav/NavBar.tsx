import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between h-[87px] bg-[#263238] p-4 text-xs text-justify text-[#617D8A] leading-5	">
        <div className="w-[54px] h-[54px] grid place-content-around">
          <Image
            src="/home.svg"
            height={24}
            width={24}
            alt="home"
            className="flex justify-self-center"
          />
          <p>Home</p>
        </div>
        <div className="w-[54px] h-[54px] grid place-content-around">
          <Image
            src="/chat.svg"
            height={24}
            width={24}
            alt="chat"
            className="flex justify-self-center"
          />
          <p>Chat</p>
        </div>
        <div className="w-[54px] h-[54px] bg-[#FED36A] grid place-content-evenly">
          <Image
            src="/addsquare.svg"
            height={2}
            width={24}
            alt="addsquare"
            className="bg-[#FED36A] flex justify-self-center"
          />
        </div>
        <div className="w-[54px] h-[54px] grid place-content-around">
          <Image
            src="/calendar.svg"
            height={24}
            width={24}
            alt="calendar"
            className="flex justify-self-center"
          />
          <p>Calendar</p>
        </div>
        <div className="w-[54px] h-[54px] grid place-content-around">
          {" "}
          <Image
            src="/notification.svg"
            height={24}
            width={24}
            alt="notification"
            className="flex justify-self-center"
          />
          <p>Notification</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
