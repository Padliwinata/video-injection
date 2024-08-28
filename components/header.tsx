import type { NextPage } from "next";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full ${className}`}
    >
      <header className="w-[1726px] flex flex-row flex-wrap items-start justify-center py-0 pl-5 pr-0 box-border gap-[11.6px] max-w-full text-center text-11xl text-black font-roboto-mono">
        <div className="h-[114.4px] w-[247.4px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <img
            className="w-[150px] flex-1 relative max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/logo-kementerian-pendidikan-dan-kebudayaan-kemendikbud-png1080p--filevector69-2@2x.png"
          />
        </div>
        <div className="w-[342.4px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.2px]">
            <a className="[text-decoration:none] h-[77.5px] flex-1 relative font-bold text-[inherit] flex items-center justify-center mq450:text-lg mq825:text-5xl">
              Home
            </a>
            <a className="[text-decoration:none] h-[77.5px] flex-1 relative font-bold text-red flex items-center justify-center mq450:text-lg mq825:text-5xl">
              About Us
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[456px] max-w-full mq825:min-w-full">
          <b className="w-[229.6px] h-[77.5px] relative flex items-center shrink-0 mq450:text-lg mq825:text-5xl">
            <span className="w-full">
              <span>Contact</span>
              <span className="text-white"> Us</span>
            </span>
          </b>
        </div>
        <div className="h-[146px] w-[379px] relative max-w-full">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[231px] max-h-full w-[149px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/logo-tel-u-3@2x.png"
          />
          <img
            className="absolute top-[35px] left-[0px] w-[250px] h-[58px] object-cover z-[3]"
            alt=""
            src="/lofoif-4@2x.png"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
