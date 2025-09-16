import React from 'react';

export interface ContainerProps {
    children: React.ReactNode;
    classNames?: string;
}

export default function Container({children, classNames}: ContainerProps) {
  return (
    <div
      className={`min-w-[360px] max-w-[360px] px-5 md:min-w-[768px] md:max-w-[768px] md:pl-8 md:pr-10 xl:min-w-[1280px] xl:max-w-[1280px] xl:px-[84px] 3xl:min-w-[1920px] 3xl:max-w-[1920px] 3xl:px-[264px] ${classNames}`}
    >
      {children}
    </div>
  );
};
