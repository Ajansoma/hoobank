import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col py-12 px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr:0 my-5 feedback-card">
    <img src={quotes} alt="quotes" className="w-[42px] h-[27px]" />
    <p className="text-[18px] leading-[32px] text-white my-10">{content}</p>
    <div className="flex items-center gap-4 text-white">
      <img
        src={img}
        alt="client picture"
        className="w-[48px] h-[48px] object-contain"
      />

      <div className="">
        <h4 className="text-[20px] leading-[32px] font-semibold">{name}</h4>
        <p className="text-[16px] leading-[24px] opacity-[0.5]">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
