import type { NextPage } from "next";
import LeftSidebar from "../components/left-sidebar";
import WebPrimaryButton from "../components/web-primary-button";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";

const Homepage: NextPage = () => {
  return (
    <div className="w-full h-[4209px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[154px] box-border gap-9 leading-[normal] tracking-[normal] text-left text-13xl text-black font-poppins gap-[18px] mq1400:h-auto">
      <div className="mt-[-939.8px] w-[824px] flex flex-row items-start justify-center pt-0 px-5 pb-[697.8px] box-border max-w-full shrink-0 lg:pb-[454px] lg:box-border mq450:pb-[295px] mq450:box-border">
        <img
          className="w-[528px] relative max-h-full max-w-full"
          alt=""
          src="/rectangle-3251.svg"
        />
      </div>
      <LeftSidebar
        logoKementerianPendidikan="/logo-kementerian-pendidikan-dan-kebudayaan-kemendikbud-png1080p--filevector69-2@2x.png"
        logoTelU2="/logo-tel-u-3@2x.png"
        lofoIf3="/lofoif-4@2x.png"
      />
      <section className="w-[1332px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-61xl text-black font-poppins">
        <h1 className="m-0 w-[992px] relative text-inherit font-semibold font-[inherit] flex items-center shrink-0 max-w-full mq450:text-5xl mq825:text-21xl">
          <span className="w-full">
            <p className="m-0">Video Injection</p>
            <p className="m-0">Detection</p>
          </span>
        </h1>
      </section>
      <div className="w-[1117px] flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border max-w-full shrink-0">
        <div className="w-[749px] relative flex items-center shrink-0 max-w-full mq450:text-lgi mq825:text-7xl">
          Video injection detection involves identifying and preventing
          unauthorized changes or insertions in video content.
        </div>
      </div>
      <div className="w-[723px] flex flex-row items-start justify-center pt-0 px-5 pb-[383px] box-border max-w-full shrink-0 text-center text-11xl text-white mq825:pb-[249px] mq825:box-border">
        <div className="h-[84px] w-[523px] relative max-w-full">
          <WebPrimaryButton />
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[523px] h-[77px] z-[1] mq450:text-lg mq825:text-5xl">{`Get Started `}</div>
        </div>
      </div>
      <section className="w-[1663px] flex flex-row items-start justify-start pt-0 pb-[88px] pl-0 pr-5 box-border gap-[23px] max-w-full shrink-0 text-left text-51xl text-black font-poppins lg:pl-5 lg:pb-[57px] lg:box-border mq825:pb-[37px] mq825:box-border">
        <div className="h-[651px] w-[164px] flex flex-col items-start justify-start pt-[67px] px-0 pb-0 box-border lg:hidden mq825:pt-11 mq825:box-border">
          <img
            className="self-stretch flex-1 relative rounded-31xl max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[334px] max-w-[calc(100%_-_187px)] lg:max-w-full gap-[42px] gap-[83px] gap-[167px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[11px] box-border max-w-full">
            <div className="w-[781px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[21px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-23xl mq825:text-37xl">
                How Video Injection Works?
              </h1>
              <div className="self-stretch relative text-13xl mq450:text-lgi mq825:text-7xl">
                Video injection involves inserting fake video streams into a
                system to trick identity verification processes. This can be
                done using methods like hacking or replacing camera devices. To
                detect these fake videos, technologies like deep learning are
                used, where models can efficiently identify and separate genuine
                from forged video content.
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-23xl mq825:text-37xl">
            The Benefits of Video Injection Detection
          </h1>
        </div>
      </section>
      <FrameComponent
        trustworthinessColumn="/trustworthiness-column.svg"
        mdiSecurity11="/mdisecurity-1-1@2x.png"
        vector="/trustworthiness-column.svg"
        operation1="/operation-1@2x.png"
        trustworthinessIcon="/trustworthiness-column.svg"
        trust1="/trust-1@2x.png"
        rectangle82="/rectangle-82.svg"
        technologyIcon="/trustworthiness-column.svg"
        technology1="/technology-1@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[117px] pl-[3px] pr-0 box-border max-w-full shrink-0 text-center text-51xl text-black font-poppins">
        <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] inline-block max-w-full mq450:text-23xl mq825:text-37xl">
          <p className="m-0">{`Follow Steps for Video Injection Detection `}</p>
        </h1>
      </section>
      <FrameComponent1 />
    </div>
  );
};

export default Homepage;
