import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  onClick?: () => void;
}

function Button({type, title, icon, variant, onClick}: ButtonProps) {
  return (
      <button
          type={type}
          className={`flexCenter gap-3 rounded-full border ${variant}`}
          onClick={onClick}
      >
        {icon && <Image src={icon} alt="title" width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
  );
}

export default Button;