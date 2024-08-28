import type { NextPage } from "next";
import RectangleComponent from "./rectangle-component";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[113px] px-[82px] pb-[314px] box-border relative gap-[163px] min-h-[1124px] max-w-full shrink-0 text-left text-61xl text-white font-poppins lg:pt-[73px] lg:pb-[204px] lg:box-border gap-5 mq800:pt-[47px] mq800:pb-[133px] mq800:box-border gap-[41px] gap-[81px] mq1125:pl-[41px] mq1125:pr-[41px] mq1125:box-border ${className}`}
    >
      <RectangleComponent
        propAlignSelf="unset"
        propPadding="356.9px 0px 357px"
        propPosition="absolute"
        propMinHeight="907px"
        propMargin="0 !important"
        propHeight="calc(100% - 217px)"
        propTop="0px"
        propRight="0px"
        propBottom="217px"
        propLeft="0px"
        rectangle2="pending_I145:118;115:661"
        propMargin1="0"
      />
      <div className="w-[1168px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[992px] relative text-inherit font-semibold font-[inherit] flex items-center shrink-0 max-w-full z-[2] mq800:text-5xl mq450:text-21xl">
          <span className="w-full">
            <p className="m-0">Video Injection</p>
            <p className="m-0">Detection</p>
          </span>
        </h1>
      </div>
      <div className="w-[523px] flex flex-row items-start justify-start max-w-full text-center text-sm font-roboto-mono">
        <div className="h-[84px] w-[375px] relative rounded-31xl bg-white hidden max-w-full">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full hidden"
            alt=""
          />
          <img
            className="absolute h-[29.05%] top-[34.52%] right-[17px] bottom-[36.43%] max-h-full w-4 hidden"
            alt=""
          />
          <img
            className="absolute h-[29.05%] top-[34.52%] bottom-[36.43%] left-[23px] max-h-full w-4 hidden"
            alt=""
          />
          <b className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_104.5px)] tracking-[0.5px] hidden w-[209px]" />
        </div>
        <div className="h-[77px] flex-1 relative text-11xl font-semibold font-poppins text-red flex items-center justify-center max-w-full z-[3] mq800:text-lg mq450:text-5xl">{`Get Started `}</div>
      </div>
    </section>
  );
};

export default FrameComponent2;
