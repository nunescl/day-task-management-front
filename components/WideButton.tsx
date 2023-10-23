import { ReactHTMLElement } from "react";

const WideButton = (props: any) => {
  console.log(props);
  return (
    <div>
      <button className="bg-[#FED36A] w-[85vw] h-16 font-bold	">
        {props.children}
      </button>
    </div>
  );
};

export default WideButton;
