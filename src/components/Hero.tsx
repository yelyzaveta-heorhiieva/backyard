import { useEffect, useRef, useState } from 'react';
import Container from './Container';
import { useMediaQuery } from 'react-responsive';

export interface HeroProps {}

export default function Hero({}: HeroProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isMob = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  
  return (
    <section
      id='home'
      className='pt-[83px] md:pt-[126px] xl:pt-[128px] 3xl:pt-[197px]'
      ref={ref}
    >
      <Container classNames='relative'>
        <div
          className={` bg-[url(./assets/images/hero.png)] ${
            active ? 'opacity-0' : 'opacity-100'
          } hero-logo `}
        ></div>
        <div
          className={`bg-[url(./assets/images/leaf.gif)] ${
            active ? 'opacity-100' : 'opacity-0'
          } hero-logo`}
        ></div>

        <h1 className='font-semibold text-[58px] md:text-[48px] md:max-w-[506px] xl:text-[72px] 3xl:text-[90px] xl:max-w-[740px] 3xl:max-w-[1027px] leading-[110%] text-[#303030] mb-[14px] md:mb-4'>
          The yield-backed stablecoin protocol boosting DeFi liquidity
        </h1>
        <p className='font-font3 text-xl md:text-base xl:text-xl 3xl:text-2xl text-[rgba(38,38,38,0.55)] mb-[38px] md:mb-[33px] xl:mb-[70px] 3xl:mb-[82px]'>
          Keep your yield working for you — we keep your liquidity accessible
        </p>
        <div className='flex justify-between font-semibold leading-[140%] tracking-[0.02em] md:max-w-[558px]'>
          <button
            type='button'
            className='backdrop-blur-sm bg-[rgba(0,0,0,0.8)] hover:bg-[#3b3b3b] hover:text-[#d1d1d2] w-[164px] h-[57px] rounded-[38px] active:bg-[#2d2d2d] active:text-[#595959]  text-[#f7f7f7] md:w-[329px] transition-all '
          >
            Join Whitelist
          </button>
          <a
            href='#'
            className='backdrop-blur-sm bg-[#e6e8ec] hover:bg-[#f8fbff] hover:text-[rgba(46,46,46,0.75)] transition-all
            active:bg-[#abacaf] active:text-[#2e2e2e] w-[144px] md:w-[208px] h-[57px] rounded-[38px] flex items-center justify-center gap-[10px] text-[#2e2e2e]'
          >
            {isMob ? 'Learn more' : 'Read Docs'}
            {isMob && (
              <svg width='12' height='11' className='stroke-1 stroke-[#000]'>
                <use href={`/icons.svg#arrow-right`}></use>
              </svg>
            )}
          </a>
        </div>
      </Container>
    </section>
  );
}
