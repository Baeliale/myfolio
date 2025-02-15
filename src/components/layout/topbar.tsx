import Image from "next/image"
import Logo from "../../assets/images/logo.png"
import { Button } from "../ui/button"
import { TextField } from "../ui/textField"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export const Topbar = () => {
  return (
    <header className={"w-full bg-backgroundSecondary h-14 p-2"}>
      <div className={"w-app desktop:w-full mx-auto flex justify-center h-full color-light"}>
        <Image className={"w-auto mr-auto"} src={Logo.src} alt={"The text MyFolio with a blue gradient and some swirls in front of it with the same blue gradient"} width={400} height={200} />
        <TextField type="text" placeholder="search" icon={faSearch} />
        <Button className="ml-auto" variant="tertiary">Login</Button>
      </div>
    </header>   
  )
}