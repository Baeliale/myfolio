import { TagTypes, TypographyVariantsType } from "@/types/types"
import { cls } from "@/utils/functions"
import { cva } from "class-variance-authority"

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tag?: TagTypes
  variant?: TypographyVariantsType
  color?: string
  link?: boolean
}

const TypographyStyles = cva(
  [],
  {
    variants: {
      variant: {
        body: "font-sans text-base",
        small: "font-sans text-sm",
        heading1: "font-heading text-4xl",
        heading2: "font-heading text-3xl",
        heading3: "font-heading text-2xl",
        heading4: "font-heading text-xl",
        heading5: "font-heading text-lg",
        heading6: "font-heading text-base",
      },
      link: {
        true: "hover:underline",
      }
    }
  }
)

export const Typography = ({tag = "span", variant = "body", link, color, className, children}: TypographyProps) => {
  const Component = tag

  return (
    <Component className={TypographyStyles({
      variant,
      className: cls([
        className,
        link,
        color ? `text-${color}` : "text-light",
      ]),
    })}>
      {children}
    </Component>
  )
}