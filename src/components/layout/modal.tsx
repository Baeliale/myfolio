import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dialog, DialogBackdrop, DialogPanel, DialogProps } from "@headlessui/react"
import { IconButton } from "../ui/iconButton"
import { cls } from "@/utils/functions"
import { ReactNode } from "react"

interface ModalProps extends Omit<DialogProps, "children"> {
  className?: string
  innerClassName?: string
  children: ReactNode
}

export const Modal = ({children, innerClassName, className, onClose, ...props}: ModalProps) => {
  return (
    <Dialog className={cls(["z-50 relative", className])} onClose={onClose} {...props}>
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogBackdrop className={"fixed inset-0 bg-black opacity-30"} />
        <DialogPanel className={cls(["relative p-16 bg-backgroundSecondary rounded-xl max-w-app desktop:max-w-appLg mx-auto w-fit", innerClassName])}>
          <IconButton className={"absolute top-4 right-4 text-error"} icon={faClose} onClick={() => onClose(false)} />
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  )
}
