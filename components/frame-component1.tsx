import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1743px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-16xl text-black font-poppins ${className}`}
    >
      <div className="w-[1131px] flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap lg:justify-center">
        <div className="w-[302px] flex flex-col items-start justify-start pt-[54px] px-0 pb-0 box-border mq825:pt-[35px] mq825:box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-[69px] gap-[34px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3.5 pr-[13px]">
              <img
                className="h-[385px] flex-1 relative max-w-full overflow-hidden"
                loading="lazy"
                alt=""
                src="/image.svg"
              />
            </div>
            <div className="self-stretch relative mq450:text-2xl mq825:text-9xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div className="h-[720px] w-[327px] flex flex-col items-end justify-start gap-10 max-w-full gap-5">
          <img
            className="w-[301px] flex-1 relative max-h-full overflow-hidden"
            alt=""
            src="/image-1.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[25px]">
            <div className="flex-1 relative mq450:text-2xl mq825:text-9xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div className="h-[720px] w-[302px] flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border mq825:pt-[34px] mq825:box-border">
          <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[71px] gap-[35px]">
            <img
              className="w-[275px] flex-1 relative max-h-full overflow-hidden"
              alt=""
              src="/image.svg"
            />
            <div className="self-stretch relative mq450:text-2xl mq825:text-9xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
