import { useMediaQuery } from 'react-responsive';
import logo from '/logo.svg';
import Container from './Container';
import { useState } from 'react';
import MobMenu from './MobMenu';
import Navigation from './Navigation';
import ConnectBtn from './ConnectBtn';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMob = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTab = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <header className=' fixed top-0 left-0 w-full  bg-[#efeff2] z-[1000]'>
      <Container classNames='flex justify-between xl:justify-start items-center mx-auto xl:bg-[url(./assets/images/bg-desk.png)] bg-[url(./assets/images/bg-mob.png)] bg-no-repeat bg-cover py-4 md:py-5 3xl:py-[34px] relative'>
        <a
          className={`${
            menuIsOpen && 'bg-[rgba(236,236,240,0.3)]'
          } flex gap-[7px] items-center font-font3 text-[rgba(51,51,51,0.95)] w-[132px] h-[44px] pl-[7px] md:pl-[11px] rounded-[108px] xl:bg-[#efeff2] xl:mr-[231px] 3xl:mr-[339px]`}
          href='/'
        >
          <img
            src={logo}
            alt='logo'
            width={`${isMob ? '20' : '25'}`}
            height={`${isMob ? '21' : '26'}`}
          />
          Backyard
        </a>
        {isMob && (
          <button
            type='button'
            className={`w-10 h-10 rounded-[11px]  border border-solid  ${
              menuIsOpen
                ? 'bg-[#e8e9ed] border-[rgba(222,222,227,0.45)]'
                : 'border-[rgba(222,222,227,0.45)] bg-[#f6f7f8]'
            }`}
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            <svg
              width={`${menuIsOpen ? '13' : '17'}`}
              height={`${menuIsOpen ? '13' : '14'}`}
              className='stroke-2 stroke-[#525352]'
            >
              <use href={`/icons.svg#${menuIsOpen ? 'close' : 'burger'}`}></use>
            </svg>
          </button>
        )}
        {!isMob && <Navigation />}
        {isTab && <ConnectBtn />}
        <MobMenu open={menuIsOpen} />
      </Container>
    </header>
  );
}
