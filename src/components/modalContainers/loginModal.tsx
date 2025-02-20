"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const LoginModal = () => {
  const [loginMode, setLoginMode] = useState<"login" | "register">("login");

  const handleClick = (action: "toggleMode" | "login" | "register") => {
    if (action === "toggleMode") setLoginMode(loginMode === "login" ? "register" : "login")
  }

  return (
    <div className="flex flex-col gap-2 w-[80vw] laptop:w-[500px] max-w-full">
      <Input label={"Username"} />
      {
        loginMode === "register" &&
          <Input label={"Email"} />
      }
      <Input label={"Password"} />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button 
          className={loginMode === "register" ? "order-2" : ""} 
          variant={loginMode === "register" ? "primary" :"tertiary"} 
          onClick={() => handleClick(loginMode === "register" ? "register" : "toggleMode")}
        >
          Register
        </Button>
        <Button 
          variant={loginMode === "login" ? "primary" :"tertiary"} 
          onClick={() => handleClick(loginMode === "login" ? "login" : "toggleMode")}
        >
          Login
        </Button>
      </div>
    </div>
  )
}
