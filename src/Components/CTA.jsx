import styles from '../styles';
import Button from './Button';

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingY} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shawdow`}
  >
    <div className="flex flex-1 flex-col">
      <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left `}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
