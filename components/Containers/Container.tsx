import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface ContainerProps {
  children: ReactNode;
  bgImgUrl?: string;
  bgImgPosition?: string;
  bgImgRepeat?: string;
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { className, bgImgUrl, bgImgPosition, bgImgRepeat, children, ...rest } = props;
  return (
    <div
      className={clsx('px-4 mobile:px-[5vw] widescreen:px-24 mx-auto widescreen:container', className)}
      style={
        bgImgUrl
          ? {
              backgroundImage: `url(${bgImgUrl})`,
              backgroundSize: 'contain',
              backgroundPosition: `${bgImgPosition ? bgImgPosition : ''}`,
              backgroundRepeat: `${bgImgRepeat ? bgImgRepeat : 'no-repeat'}`,
            }
          : {}
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
