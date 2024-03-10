import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <section className={`mx-auto px-5 max-w-screen-xl`}>{children}</section>
  );
}

export default Container;
