import styles from '../styles';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="#home" className={`md:flex ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0 `}
    >
      <div className="flex items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient">
        <img
          src={discount}
          alt="discount"
          className="w-[32px] h-[32px] font-semibold"
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white text-lg">20%</span> DISCOUNT FOR{' '}
          <span className="text-white text-lg">1 MONTH ACCOUNT</span>
        </p>
      </div>
      <div>
        <div className="flex">
          <h1 className="text-[52px] leading-[72px] text-white font-semibold ss:text-[72px] ss:leading-[100px]">
            The Next <br className="hidden sm:block" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden mr:0 ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-[52px] w-full leading-[72px] text-white font-semibold ss:text-[68px] ss:leading-[100px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </div>
    <div className={`${styles.flexCenter} flex flex-1 my-10 md:my-0 relative `}>
      <img src={robot} alt="robot" className="w-full h-full z-5" />
      <div className="w-[40%] h-[35%] z-0 absolute top-0 pink__gradient"></div>
      <div className="w-[80%] h-[80%] rounded-full z-[1] absolute top-0 white__gradient"></div>
      <div className="w-[50%] h-[50%] z-0 absolute right-20 bottom-20 blue__gradient"></div>
    </div>
    <div className={`${styles.flexStart} flex ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
