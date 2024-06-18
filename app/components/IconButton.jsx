import Image from "next/image";

const IconButton = ({ type, icon }) => {
  return (
    <button
      type={type}
      className={`flexCenter rounded-full cursor-pointer`}
    >
      {icon && <Image src={icon} alt={icon} width={30} height={30} />}
      {/* <p className="bold-16 whitespace-nowrap">{title}</p> */}
    </button>
  );
};

export default IconButton;
