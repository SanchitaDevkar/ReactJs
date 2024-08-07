import type { NextPage } from "next";
import SelectedFile from "../components/selected-file";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative rounded-[55px] bg-white border-white border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 pb-[29px] pl-9 pr-0 gap-[5px] leading-[normal] tracking-[normal]">
      <SelectedFile />
      <main className="w-full h-[909px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[670.5px] left-[-21px] w-[4557px] h-[43px]"
          alt=""
        />
        <img
          className="absolute top-[50.5px] left-[-21px] w-[4557px] h-[43px]"
          alt=""
        />
        <img
          className="absolute top-[5px] left-[643px] w-[1163px] h-[916px] object-cover z-[1]"
          alt=""
          src="/sportrunningshoes-2@2x.png"
        />
        <img
          className="absolute top-[0px] left-[635px] w-[1163px] h-[916px] object-cover mix-blend-color-burn z-[2]"
          alt=""
          src="/sportrunningshoes-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[635px] w-[1163px] h-[916px] mix-blend-color-burn z-[3]"
          alt=""
          src="/sportrunningshoes-1-stroke.svg"
        />
      </main>
      <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
        <div className="w-60 flex flex-row items-start justify-start py-0 px-[92px] box-border mq750:pl-[23px] mq750:pr-[23px] mq750:box-border mq1275:pl-[46px] mq1275:pr-[46px] mq1275:box-border">
          <div className="w-[1455px] flex flex-row items-start justify-start gap-[115.1px] max-w-[2599%] shrink-0 mq750:gap-[58px] mq450:gap-[29px] mq1275:flex-wrap">
            <div className="h-[515.9px] w-[491.9px] flex flex-col items-start justify-start pt-[105px] px-0 pb-0 box-border min-w-[491.9px] max-w-full mq750:pt-[68px] mq750:box-border mq750:min-w-full mq1275:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full mq1275:self-stretch mq1275:w-auto"
                loading="lazy"
                alt=""
                src="/hero-elements.svg"
              />
            </div>
            <img
              className="h-[709px] flex-1 relative max-w-full overflow-hidden min-w-[551px] z-[4] mq1100:min-w-full"
              loading="lazy"
              alt=""
              src="/just-do-it.svg"
            />
          </div>
        </div>
        <div className="w-[148px] h-28 flex flex-row items-start justify-start relative">
          <div className="h-[30px] w-[60px] relative hidden z-[0]" />
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-2.svg"
            />
            <img
              className="absolute top-[43px] left-[6px] w-[60px] h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
            <img
              className="absolute top-[83px] left-[14.2px] w-[8.6px] h-[8.1px] z-[1]"
              loading="lazy"
              alt=""
              src="/star-1.svg"
            />
            <img
              className="absolute top-[83px] left-[29.2px] w-[8.6px] h-[8.1px] z-[1]"
              loading="lazy"
              alt=""
              src="/star-2.svg"
            />
            <img
              className="absolute top-[83px] left-[44.2px] w-[8.6px] h-[8.1px] z-[1]"
              loading="lazy"
              alt=""
              src="/star-3.svg"
            />
            <img
              className="absolute top-[83px] left-[59.2px] w-[8.6px] h-[8.1px] z-[1]"
              loading="lazy"
              alt=""
              src="/star-4.svg"
            />
            <img
              className="absolute top-[83px] left-[74.2px] w-[8.6px] h-[8.1px] z-[1]"
              loading="lazy"
              alt=""
              src="/star-5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
