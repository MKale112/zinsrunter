import React, { ReactNode, HTMLProps } from "react";
import clsx from "clsx";

export interface FullWidthContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  bgImgUrl?: string;
  bgImgPosition?: string;
  bgImgRepeat?: string;
  children: ReactNode;
}

export const FullWidthContainer = (props: FullWidthContainerProps) => {
  const { className, bgImgUrl, children, ...rest } = props;
  return (
    <div
      className={clsx(className)}
      style={
        bgImgUrl
          ? {
              backgroundImage: `url(${bgImgUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "right top",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default FullWidthContainer;
