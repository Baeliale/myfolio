import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type HTMLButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>

interface IconButtonProps extends Omit<HTMLButtonType, "children"> {
  icon: IconProp
}

export const IconButton = ({ icon, onClick, ...props }: IconButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}
