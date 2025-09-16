import React, { useEffect, useState } from 'react';

export interface NavigationProps { }

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'work', title: 'How it works' },
  { id: 'design', title: 'Token design' },
  { id: 'flywheel', title: 'YARD flywheel' },
];

export default function Navigation({ }: NavigationProps) {
    const [active, setActive] = useState('home');

     useEffect(() => {
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               setActive(entry.target.id);
             }
           });
         },
         { threshold: 0.5 },
       );

       sections.forEach(({ id }) => {
         const el = document.getElementById(id);
         if (el) observer.observe(el);
       });

       return () => observer.disconnect();
     }, []);
  return (
    <nav>
      <ul
        className='font-medium text-sm  font-second flex flex-col gap-[7px] mb-[13px] leading-[1.32] 
      md:bg-[#f2f3f5] md:mb-0 md:flex-row md:border md:items-center md:gap-[1px] md:h-[37px] xl:h-[44px] md:p-[3px] md:rounded-[100px] md:border-solid md:border-[rgba(225,225,226,0.46)]'
      >
        {sections.map((sec) => (
          <li
            key={sec.id}
            className={`md:p-[9px] md:rounded-[100px] md:h-[31px] flex items-center ${
             active === sec.id && 'md:bg-[#303030]'
            } `}
          >
            <a
              href={`#${sec.id}`}
              className={`font-medium text-sm md:text-[11px] xl:text-[13px] ${
                active === sec.id
                  ? 'text-[#303030] md:text-[#fbfbfc]'
                  : 'text-[#7a7a7a] md:text-[#aeb0b1]'
              }`}
            >
              {sec.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
