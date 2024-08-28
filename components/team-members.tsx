import type { NextPage } from "next";

export type TeamMembersType = {
  className?: string;
};

const TeamMembers: NextPage<TeamMembersType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1746px] flex flex-row items-start justify-start pt-0 px-[51px] pb-10 box-border max-w-full shrink-0 text-left text-21xl text-black font-poppins lg:pl-[25px] lg:pr-[25px] lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center gap-[42px] max-w-full gap-[21px] mq1425:flex-wrap">
        <div className="w-[661px] flex flex-col items-end justify-start gap-[55px] min-w-[661px] max-w-full gap-[27px] mq825:min-w-full mq1425:flex-1">
          <div className="w-[544px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-[246px] w-[248px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[113px] max-w-full gap-7 gap-14">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[34px]">
              <div className="relative font-semibold mq450:text-5xl mq825:text-13xl">
                Dr. Fazmah Arif Yulianto
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center">
              <div className="w-[451px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <img
                  className="h-[246px] w-[247px] relative"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[31px] max-w-full mq825:flex-wrap gap-[15px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border min-w-[249px] max-w-full">
                  <div className="self-stretch relative font-medium mq450:text-5xl mq825:text-13xl">
                    <p className="m-0">{`Muhamad Raihan `}</p>
                    <p className="m-0">{`Ramadhan `}</p>
                  </div>
                </div>
                <img
                  className="h-[247px] w-[247px] relative mq825:flex-1"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[612px] max-w-full mq825:min-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[57px] max-w-full mq825:flex-wrap gap-7">
            <div className="flex-1 flex flex-col items-start justify-start gap-[83px] min-w-[293px] max-w-full gap-[41px]">
              <div className="flex flex-row items-start justify-start py-0 px-7">
                <img
                  className="h-[246px] w-[247px] relative"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="self-stretch relative font-semibold mq450:text-5xl mq825:text-13xl">
                <p className="m-0">Dr. Vera Suryani</p>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[43px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <img
                  className="h-[246px] w-[247px] relative"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="w-[433px] flex flex-col items-end justify-start relative gap-[228px] min-w-[433px] max-w-full gap-[114px] mq825:flex-1 mq825:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start">
                <img
                  className="h-[246px] w-[248px] relative"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <img
                className="w-[247px] h-[246px] relative"
                alt=""
                src="/vector-1.svg"
              />
              <div className="absolute !m-[0] top-[301px] left-[-86px] leading-[56px] font-semibold z-[1] mq450:text-5xl mq450:leading-[34px] mq825:text-13xl mq825:leading-[45px]">
                Parman Sukarno, Ph.D
              </div>
            </div>
          </div>
          <div className="w-[703px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq825:flex-wrap">
              <div className="w-[308px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
                <div className="self-stretch relative font-medium mq450:text-5xl mq825:text-13xl">
                  Bella Hutauruk
                </div>
              </div>
              <img
                className="h-[246px] w-[248px] relative mq825:flex-1"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
