import type { NextPage } from "next";

export type LeftSidebarType = {
  className?: string;
  logoKementerianPendidikan?: string;
  logoTelU2?: string;
  lofoIf3?: string;
};

const LeftSidebar: NextPage<LeftSidebarType> = ({
  className = "",
  logoKementerianPendidikan,
  logoTelU2,
  lofoIf3,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[77px] pl-[25px] pr-0 box-border max-w-full shrink-0 ${className}`}
    >
      <header className="flex-1 flex flex-row flex-wrap items-end justify-center gap-[12.7px] max-w-full text-center text-11xl text-red font-roboto-mono">
        <div className="h-[124px] w-[258.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[22.6px] box-border">
          <img
            className="w-[150px] flex-1 relative max-h-full object-cover"
            loading="lazy"
            alt=""
            src={logoKementerianPendidikan}
          />
        </div>
        <div className="w-[373.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[18.6px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.2px] mq450:flex-wrap">
            <a className="[text-decoration:none] h-[92.7px] flex-1 relative font-bold text-[inherit] flex items-center justify-center min-w-[122px] shrink-0 mq450:text-lg mq825:text-5xl">
              Home
            </a>
            <a className="[text-decoration:none] h-[92.7px] flex-1 relative font-bold text-black flex items-center justify-center min-w-[122px] shrink-0 mq450:text-lg mq825:text-5xl">
              About Us
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[18.6px] box-border min-w-[443px] max-w-full text-black mq825:min-w-full">
          <b className="w-[250.4px] h-[92.7px] relative flex items-center justify-center shrink-0 mq450:text-lg mq825:text-5xl">
            Contact Us
          </b>
        </div>
        <div className="h-[146px] w-[380px] relative max-w-full">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[231px] max-h-full w-[149px] object-cover"
            loading="lazy"
            alt=""
            src={logoTelU2}
          />
          <img
            className="absolute top-[35px] left-[0px] w-[250px] h-[58px] object-cover z-[1]"
            alt=""
            src={lofoIf3}
          />
        </div>
      </header>
    </section>
  );
};

export default LeftSidebar;
