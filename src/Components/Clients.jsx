import { clients } from '../constants';
import styles from '../styles';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 flex-wrap min-w[100px] sm:min-w[190px]`}
        >
          <img
            src={client.logo}
            alt="logo"
            className="w-[100px] sm:w-[192px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
