import styles from '../styles';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-5`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
    </div>

    <div className="flex-[1.5] flex w-full justify-between flex-wrap md:mt-0 mt-10 mb-6">
      {footerLinks.map((footer) => (
        <div
          key={footer.id}
          className="flex flex-col ss:my-0 my-4 max-w-[150px]"
        >
          <h1 className="text-[18px] font-semibold leading-[27px] text-white mb-4">
            {footer.title}
          </h1>
          <ul className="flex flex-col gap-3">
            {footer.links.map((link) => (
              <li
                key={link.name}
                className="text-[16px] leading-[24px] text-dimWhite hover:text-secondary list-none cursor-pointer "
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="text-[18px] leading-[27px] text-white text-center mb-4">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex gap-5 mt-6 md:mt-0">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt="social"
            className="w-[21px] h-[21px] object-contain cursor-pointer"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
