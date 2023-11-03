const WideButton = (props: any) => {
  return (
    <button
      className="bg-[#FED36A] w-[85vw] h-16 font-bold"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default WideButton;
