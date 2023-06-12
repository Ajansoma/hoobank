import { apple, bill, google } from '../assets';
import styles, { layout } from '../styles';

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="billing"
        className="relative z-[5] w-full object-contain"
      />
      <div className="w-[50%] h-[50%] z-[3] absolute top-0 -left-1/2 white__gradient rounded-full"></div>
      <div className="w-[50%] h-[50%] z-[0] absolute bottom-0 -left-1/2 pink__gradient rounded-full"></div>
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="hidden sm:block" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex mt-10 gap-10">
        <img src={apple} alt="apple" />
        <img src={google} alt="goggle" />
      </div>
    </div>
  </section>
);

export default Billing;
