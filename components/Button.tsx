import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  onClick?: () => void;
  full?: boolean;
}

function Button({type, title, icon, variant, onClick, full}: ButtonProps) {
  return (
      <button
          type={type}
          className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}` }
          onClick={onClick}
      >
        {icon && <Image src={icon} alt="title" width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
  );
}

export default Button;
