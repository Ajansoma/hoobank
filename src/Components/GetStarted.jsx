import styles from '../styles';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} h-[140px] w-[140px] bg-blue-gradient cursor-pointer p-[2px] rounded-full`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexCenter} flex`}>
          <p className="font-medium text-lg leading-[23px] text-gradient mr-2">
            Get{' '}
          </p>
          <img src={arrowUp} className="h-[23px] w-[23px]" />
        </div>
        <p className="font-medium text-lg leading-[23px] text-gradient">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
