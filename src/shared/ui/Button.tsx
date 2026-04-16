
type ButtonProps = {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  variant?: "primary" | "secondary" | "danger" | "success";
}

const Button = ({ label, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] p-3 rounded-md text-white cursor-pointer">
      {label}
    </button>
  )
}

export default Button;
