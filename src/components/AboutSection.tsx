
import Container from './Container';
import SwiperSlider from './SwiperSlide';



export interface AboutSectionProps {}

export default function AboutSection({}: AboutSectionProps) {
    return (
      <section id='about' className='pt-[67px] md:pt-[119px] xl:pt-[172px] 3xl:pt-[131px]'>
        <Container>
          <h2 className='font-bold text-[28px] md:text-[42px] 3xl:text-[48px] leading-[110%] text-[#303030] mb-5 md:mb-9 xl:mb-0'>
            What is Backyard?
          </h2>
         <SwiperSlider />
        </Container>
      </section>
    );
};
