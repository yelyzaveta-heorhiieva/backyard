import React, { useEffect, useState } from 'react';
import ConnectBtn from './ConnectBtn';
import Navigation from './Navigation';

export interface MobMenuProps {
  open: boolean;
}

export default function MobMenu({ open }: MobMenuProps) {
   
  return (
    <div
      className={`absolute z-[999] right-5 top-[66px] backdrop-blur-[9.300000190734863px] bg-[#e8e9ed] border w-44 h-[202px] px-[14px] pt-[13px] pb-[14px] rounded-[19px] border-solid border-[#e4e4e9] transition-transform duration-300  ${
        open ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-[196px] opacity-0 pointer-events-none'
      }`}
    >
      <Navigation />
      <ConnectBtn />
    </div>
  );
}
