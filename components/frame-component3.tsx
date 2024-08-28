import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full shrink-0 ${className}`}
    >
      <div className="w-[1154px] flex flex-row items-start justify-between gap-5 max-w-full lg:flex-wrap lg:justify-center">
        <div className="w-80 flex flex-col items-start justify-start pt-[54px] pb-0 pl-0 pr-[19px] box-border mq450:pt-[35px] mq450:box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-[155px] gap-[77px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[18px] pr-2">
              <img
                className="h-[385px] flex-1 relative max-w-full overflow-hidden"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] gap-[17px]">
              <div className="self-stretch h-[5px] relative bg-black z-[1]" />
              <div className="self-stretch h-1.5 relative bg-black" />
            </div>
          </div>
        </div>
        <div className="h-[639px] w-[307px] flex flex-col items-start justify-start gap-[126px] gap-[63px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-[34px] gap-[17px]">
              <div className="self-stretch h-[5px] relative bg-black z-[1]" />
              <div className="self-stretch h-1.5 relative bg-black" />
            </div>
          </div>
        </div>
        <div className="w-[301px] flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border mq450:pt-[34px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[154px] gap-[77px]">
            <div className="w-[289px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
              <img
                className="h-[385px] flex-1 relative max-w-full overflow-hidden"
                alt=""
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] gap-[17px]">
              <div className="self-stretch h-[5px] relative bg-black z-[1]" />
              <div className="self-stretch h-1.5 relative bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
