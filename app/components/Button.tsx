import React, { ComponentProps } from "react";
import { cn } from "../utils/style";

type ButtonProps = ComponentProps<"button"> & {};

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-blue-500 text-white mt-5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
