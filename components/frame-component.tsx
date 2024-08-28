import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
  trustworthinessColumn?: string;
  mdiSecurity11?: string;
  vector?: string;
  operation1?: string;
  trustworthinessIcon?: string;
  trust1?: string;
  rectangle82?: string;
  technologyIcon?: string;
  technology1?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  trustworthinessColumn,
  mdiSecurity11,
  vector,
  operation1,
  trustworthinessIcon,
  trust1,
  rectangle82,
  technologyIcon,
  technology1,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[229px] pl-[21px] pr-5 box-border max-w-full shrink-0 text-center text-11xl text-black font-poppins mq825:pb-[149px] mq825:box-border ${className}`}
    >
      <div className="w-[1560px] flex flex-row items-start justify-center gap-[68px] max-w-full gap-[17px] gap-[34px] mq1400:flex-wrap">
        <div className="flex-[0.744] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-col items-end justify-start pt-[25px] pb-[189px] pl-[42px] pr-12 box-border gap-[25px] min-w-[303px] max-w-full mq450:pt-5 mq450:px-5 mq450:pb-[123px] mq450:box-border mq450:flex-1">
          <div className="w-[340px] h-[400px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[3px] pr-0">
            <div className="h-[71px] w-[75px] flex flex-row items-start justify-start relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src={trustworthinessColumn}
                />
                <img
                  className="absolute w-[calc(100%_-_25px)] top-[11px] right-[12px] left-[13px] max-w-full overflow-hidden h-[50px] object-cover z-[2]"
                  alt=""
                  src={mdiSecurity11}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative font-semibold z-[1] mq450:text-lg mq825:text-5xl">
            Enchanced Security
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1 box-border min-w-[303px] max-w-full">
          <div className="self-stretch h-[400px] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-row items-start justify-center py-[25px] pl-[21px] pr-5 box-border max-w-full">
            <div className="h-[400px] w-[336px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden max-w-full" />
            <div className="h-[71px] w-[75px] flex flex-row items-start justify-start relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src={vector}
                />
                <img
                  className="absolute w-[calc(100%_-_25px)] top-[11px] right-[13px] left-[12px] max-w-full overflow-hidden h-[50px] object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src={operation1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1 box-border min-w-[303px] max-w-full">
          <div className="self-stretch shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-col items-start justify-start pt-[25px] pb-[46px] pl-7 pr-[27px] box-border gap-[13px] max-w-full mq450:pt-5 mq450:pb-[30px] mq450:box-border">
            <div className="w-[336px] h-[400px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-0.5">
              <div className="h-[71px] w-[75px] flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src={trustworthinessIcon}
                  />
                  <img
                    className="absolute w-[calc(100%_-_25px)] top-[11px] right-[13px] left-[12px] max-w-full overflow-hidden h-[50px] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src={trust1}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3.5 pr-[17px]">
                <div className="flex-1 relative font-semibold z-[1] mq450:text-lg mq825:text-5xl">
                  Trustworthiness
                </div>
              </div>
              <div className="self-stretch relative text-xl z-[1] mq450:text-base">
                Boosts the reliability of video communication, crucial for areas
                like banking where verifying identity matters.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.8916] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-row items-start justify-center py-[25px] px-5 box-border min-w-[309px] max-w-full min-h-[400px] mq450:flex-1 mq1400:min-h-[auto]">
          <img
            className="h-[400px] w-[336px] relative rounded-31xl hidden max-w-full"
            alt=""
            src={rectangle82}
          />
          <div className="h-[71px] w-[75px] flex flex-row items-start justify-start relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src={technologyIcon}
              />
              <img
                className="absolute w-[calc(100%_-_25px)] top-[11px] right-[12px] left-[13px] max-w-full overflow-hidden h-[50px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src={technology1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
