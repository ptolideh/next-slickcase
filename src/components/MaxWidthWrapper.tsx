import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface MaxWidthWrapperProps extends ComponentProps<"div"> {}

export default function MaxWidthWrapper({
  className,
  children,
  ...props
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("h-full w-full max-w-screen-xl px-2.5 md:px-20", className)}
      {...props}
    >
      {children}
    </div>
  );
}
