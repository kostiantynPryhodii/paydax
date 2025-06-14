import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-[1740px] mx-auto">{children}</div>;
}
