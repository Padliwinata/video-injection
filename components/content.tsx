import type { NextPage } from "next";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-80 pl-[99px] pr-5 box-border max-w-full text-left text-21xl text-black font-poppins lg:pb-52 lg:box-border mq825:pl-6 mq825:pb-[135px] mq825:box-border mq1425:pl-[49px] mq1425:box-border ${className}`}
    >
      <div className="w-[1418px] flex flex-row items-end justify-between max-w-full gap-5 mq1425:flex-wrap">
        <div className="w-[857px] flex flex-row items-start justify-start gap-20 min-w-[857px] max-w-full gap-10 lg:min-w-full gap-5 mq825:flex-wrap mq1425:flex-1">
          <div className="w-[381px] flex flex-col items-start justify-start pt-[68px] px-0 pb-0 box-border min-w-[381px] max-w-full mq825:flex-1 mq825:pt-11 mq825:box-border mq825:min-w-full">
            <div className="self-stretch shadow-[0px_4px_250px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-col items-center justify-start pt-[7px] pb-72 pl-[21px] pr-5 box-border max-w-full mq825:pt-5 mq825:pb-[187px] mq825:box-border">
              <div className="w-[381px] h-[477px] relative shadow-[0px_4px_250px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden max-w-full" />
              <div className="h-[122px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <img
                  className="mb-[-12px] h-[134px] w-[134px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/sight-1@2x.png"
                />
              </div>
              <div className="w-[134px] relative font-semibold flex items-center z-[1] mq450:text-5xl mq825:text-13xl">
                Vision
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-red flex flex-col items-start justify-start pt-8 pb-[420px] pl-[131px] pr-5 box-border min-w-[257px] max-w-full text-white mq450:pl-5 mq450:box-border mq825:pt-[21px] mq825:pb-[273px] mq825:box-border">
            <div className="w-[396px] h-[621px] relative shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-red hidden max-w-full" />
            <div className="flex flex-row items-start justify-start py-0 px-3">
              <img
                className="h-[110px] w-[110px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/mission-1@2x.png"
              />
            </div>
            <div className="w-[165px] relative font-semibold flex items-center z-[1] mq450:text-5xl mq825:text-13xl">
              Mission
            </div>
          </div>
        </div>
        <div className="w-[333px] flex flex-col items-start justify-end pt-0 px-0 pb-[39px] box-border min-w-[333px] max-w-full mq1425:flex-1">
          <div className="self-stretch h-[326px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-31xl w-full h-full z-[1]"
              alt=""
            />
            <div className="absolute top-[55px] left-[11px] w-[134px] flex flex-row items-start justify-start">
              <div className="flex-1 relative font-semibold z-[2] mq450:text-5xl mq825:text-13xl">
                Motto
              </div>
              <div className="h-[477px] w-[381px] !m-[0] absolute top-[-243px] left-[-151px] shadow-[0px_4px_250px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white flex flex-row items-start justify-center py-[121px] pl-[55px] pr-5 box-border">
                <div className="h-[477px] w-[381px] relative shadow-[0px_4px_250px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white hidden max-w-full" />
                <img
                  className="h-[134px] w-[134px] relative object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/star-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
