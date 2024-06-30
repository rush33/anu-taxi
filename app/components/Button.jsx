import Image from "next/image";

const Button = ({ type, title, icon, variant, onClick, iconFirst = true }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} cursor-pointer shadow-lg`}
      onClick={onClick}
    >
      {icon &&
        (iconFirst ? (
          <div className="flex items-center gap-x-2">
            <p className="bold-16 whitespace-nowrap">{title}</p>
            <Image src={icon} alt={title} width={24} height={24} />
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <p className="bold-16 whitespace-nowrap">{title}</p>
            <Image src={icon} alt={title} width={24} height={24} />
          </div>
        ))}
    </button>
  );
};

export default Button;
