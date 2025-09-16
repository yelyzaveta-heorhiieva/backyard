import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface ConnectBtnProps {}

export default function ConnectBtn({ }: ConnectBtnProps) {
  const [connect, setConnect] = useState(false);
  const isMob = useMediaQuery({
    query: '(max-width: 767px)',
  });
    
  return (
    <button
      type='button'
      className={`relative border rounded-[100px] border-solid border-[#ebebed] w-full md:w-[75px] md:h-[31px] h-10  font-medium text-[13px] font-second  ${
        isMob && connect
          ? 'bg-[#fbfbfc] text-[#303030] justify-start pl-[26px]'
          : connect
          ? 'bg-[#fbfbfc] text-[#303030]'
          : 'bg-[#303030] text-[#e8e9ed]'
      }`}
      onClick={() => setConnect((prev) => !prev)}
    >
      {isMob && connect ? '0x233...ger' : connect ? '0x233.ger' : 'Connect'}
      {isMob && connect && (
        <div className='absolute right-[3px] bg-[rgba(196,196,196,0.21)] rounded-[43px] w-[34px] h-[34px] flex items-center justify-center'>
          <svg width='18' height='18' className='fill-[rgba(131,131,131,0.58)]'>
            <use href={`/icons.svg#connect`}></use>
          </svg>
        </div>
      )}
    </button>
  );
};
