import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1674px] flex flex-row items-start justify-center pt-0 px-5 pb-[188.4px] box-border max-w-full shrink-0 text-center text-11xl text-black font-poppins mq800:pb-[122px] mq800:box-border ${className}`}
    >
      <div className="w-[1430px] flex flex-row items-end justify-between max-w-full gap-5 mq1350:flex-wrap mq1350:justify-center">
        <div className="w-[392px] flex flex-col items-start justify-start py-0 pl-0 pr-[9px] box-border max-w-full">
          <div className="self-stretch shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-col items-start justify-start pt-10 px-0 pb-[190px] box-border min-h-[400px] max-w-full mq450:pt-[26px] mq450:pb-[123px] mq450:box-border">
            <div className="self-stretch h-[400px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden" />
            <div className="w-[358px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <img
                className="h-[88.4px] w-[88px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/icbaselineattachemail-1@2x.png"
              />
            </div>
            <div className="self-stretch h-[82.1px] relative font-semibold flex items-center justify-center shrink-0 z-[1] mq800:text-5xl mq450:text-lg">{`Email Us `}</div>
          </div>
        </div>
        <div className="w-[383px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border max-w-full">
          <div className="self-stretch shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-col items-start justify-start pt-10 px-0 pb-[206px] gap-[21px] mq450:pt-[26px] mq450:pb-[134px] mq450:box-border">
            <div className="self-stretch h-[400px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px]">
              <img
                className="h-[88px] w-[88px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/icsharplocationon-1-1@2x.png"
              />
            </div>
            <div className="self-stretch relative font-semibold z-[1] mq800:text-5xl mq450:text-lg">
              {" "}
              Location
            </div>
          </div>
        </div>
        <div className="w-[383px] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-col items-start justify-start pt-[38px] px-0 pb-[190px] box-border min-h-[400px] max-w-full mq450:pt-[25px] mq450:pb-[123px] mq450:box-border">
          <div className="self-stretch h-[400px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
            <img
              className="h-[90px] w-[88px] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/heroiconsphonesolid-1@2x.png"
            />
          </div>
          <div className="self-stretch h-[82.1px] relative font-semibold flex items-center justify-center shrink-0 z-[1] mq800:text-5xl mq450:text-lg">
            Phone Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
