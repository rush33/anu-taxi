import Image from "next/image";

const Button = ({ type, title, icon, variant, onClick }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} cursor-pointer`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <p className="bold-16 whitespace-nowrap">{title}</p>
    </button>
  );
};

export default Button;