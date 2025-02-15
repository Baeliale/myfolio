import { cls } from "@/utils/functions"
import { cva } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary"
}

const ButtonStyles = cva(
  ["py-2 px-4 rounded h-max"],
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primaryLight text-light",
        secondary: "bg-secondary hover:bg-secondaryLight text-light",
        tertiary: "bg-tertiary hover:bg-tertiaryLight text-light",
      }
    }
  }  
)

export const Button = ({children, className, variant = "primary", ...props}: ButtonProps) => {
  return (
    <button 
      className={ButtonStyles({
        variant,
        className: cls([className])
      })} 
      {...props}
    >
      {children}
    </button>
  )
}