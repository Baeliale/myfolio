import { InputHTMLAttributes } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconProp,
  iconPlacement?: "left" | "right"
}

export const TextField = ({icon, iconPlacement = "left", ...props}: TextFieldProps) => {
  return (
    <div className={"rounded overflow-hidden relative"}>
      <input className={"w-full px-7 py-2"} type="text" {...props} />
      {icon && <FontAwesomeIcon className={`absolute top-0 bottom-0 my-auto ${iconPlacement === "left" ? "left-2" : "right-2"} h-1/3 pointer-events-none`} icon={icon} />}
    </div>
  )
}