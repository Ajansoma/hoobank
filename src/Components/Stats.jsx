import styles from '../styles';
import { stats } from '../constants';
const ClientStats = () => (
  <section className={`${styles.flexCenter} flex flex-wrap mb-6 sm:mb-20`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-1 items-center m-3`}>
        <h4 className="font-semibold text-white text-[30px] leading-[43px] xs:text-[40px] xs:leading-[53px]">
          {stat.value}
        </h4>
        <p className="text-white ml-2 uppercase text-gradient text-[15px] leading-[21px] xs:text-[20px] xs:leading-[26px]">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default ClientStats;
