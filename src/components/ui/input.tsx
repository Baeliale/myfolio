import { ReactNode } from "react"
import { Typography } from "../base/typography"
import { TextField, TextFieldProps } from "./textField"

interface InputProps extends TextFieldProps {
  label: ReactNode
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label>
      <Typography variant={"small"}>{label}</Typography>
      <TextField />
    </label>
  )
}
