import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import whater from '../assets/images/whater.gif';
import plant from '../assets/images/plant.gif';
import coins from '../assets/images/coins.gif';
import { useMediaQuery } from 'react-responsive';

const arr = [
  {
    classes: 'mt-[-16px md:mt-0] xl:mt-[-16px]',
    img: whater,
    number: '1',
    title: 'Yield Aggregator',
    feature: 'One-click yield aggregation',
    text: 'Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity',
  },
  {
    classes: 'mt-[-16px] md:mt-0 xl:mt-[-16px]',
    img: plant,
    number: '2',
    title: 'Yield-backed Stablecoin',
    feature: 'Unlock liquidity with BYD',
    text: 'Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time',
  },
  {
    classes: 'mt-[-36px] md:mt-0 xl:mt-[-36px]',
    img: coins,
    number: '3',
    title: 'Boost DeFi Liquidity',
    feature: 'Boost protocols, earn more',
    text: 'Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.',
  },
];

export default function SwiperSlider() {
  const isDesk = useMediaQuery({
    query: '(min-width: 1280px)',
  });
     const isBigScreen= useMediaQuery({
       query: '(min-width: 1920px)',
     });
  return (
    <Swiper
      className='my-swiper mb-8'
      modules={[Pagination]}
      spaceBetween={isBigScreen ? 145 : isDesk ? 78 : 30}
      slidesPerView={isDesk ? 3 : 1}
      loop
      pagination={isDesk ? false : { clickable: true }}
    >
      {arr.map(({ img, number, title, feature, text, classes }) => (
        <SwiperSlide key={title}>
          <div className='h-[396px] md:h-[258px] xl:h-[440px] flex flex-col justify-end md:flex-row-reverse md:justify-between md:items-center xl:flex-col xl:justify-end w-[310px] md:w-full xl:w-[314px] 3xl:w-[360px]'>
            <img
              src={img}
              alt={title}
              width='160'
              height='160'
              className='mx-auto md:mx-0 md:max-h-[258px] md:w-[210px] xl:w-[191px] xl:max-h-[240px]'
            />
            <div>
              <div
                className={`flex items-center h-[57px] ${classes} mb-[15px] md:w-[388px] xl:w-full backdrop-blur-sm px-[13px]  py-3 rounded-[45px] bg-[#f4f6f7]`}
              >
                <span className='flex items-center justify-center min-w-[33px] h-[33px] rounded-full backdrop-blur-[15.766668319702148px] bg-[#2d322f] font-main font-semibold text-[15px] leading-[140%] tracking-[0.02em] text-[#fbfbfc]'>
                  {number}
                </span>
                <h3 className='font-normal text-xl text-[#303030] font-font3 text-center w-full'>
                  {title}
                </h3>
              </div>

              <div className='px-8 py-[30px] rounded-[31px] backdrop-blur-sm bg-[#f4f6f7] md:w-[388px] xl:w-full'>
                <h4 className='font-extrabold text-lg text-[#2d322f] mb-[11px] 3xl:text-xl'>
                  {feature}
                </h4>
                <p className='text-sm text-[#787878] font-third 3xl:text-base'>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
