import type { NextPage } from "next";
import LeftSidebar from "../components/left-sidebar";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import FrameComponent3 from "../components/frame-component3";

const Homepage1: NextPage = () => {
  return (
    <div className="w-full h-[4209px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[235px] box-border leading-[normal] tracking-[normal] mq1125:h-auto">
      <div className="mt-[-939.8px] w-[824px] flex flex-row items-start justify-center pt-0 px-5 pb-[733.8px] box-border max-w-full shrink-0 lg:pb-[477px] lg:box-border mq450:pb-[310px] mq450:box-border">
        <img className="h-[206px] w-[528px] relative max-w-full" alt="" />
      </div>
      <div className="w-[301px] h-[5px] relative bg-black hidden" />
      <div className="w-[301px] h-[5px] relative bg-black hidden" />
      <div className="w-[301px] h-[5px] relative bg-black hidden" />
      <LeftSidebar
        logoKementerianPendidikan="pending_145:66"
        logoTelU2="pending_145:88"
        lofoIf3="pending_145:89"
      />
      <FrameComponent2 />
      <section className="w-[1663px] flex flex-row items-start justify-start pt-0 pb-[124px] pl-0 pr-5 box-border gap-[23px] max-w-full shrink-0 text-left text-51xl text-black font-poppins lg:pl-5 lg:pb-[81px] lg:box-border mq450:pb-[53px] mq450:box-border">
        <div className="h-[619px] w-[164px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border lg:hidden">
          <img
            className="self-stretch flex-1 relative rounded-31xl max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[302px] max-w-[calc(100%_-_187px)] lg:max-w-full gap-[38px] gap-[75px] gap-[151px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[18px] box-border max-w-full">
            <div className="w-[781px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[21px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq800:text-23xl mq450:text-37xl">
                How Video Injection Works?
              </h1>
              <div className="self-stretch relative text-13xl font-light mq800:text-lgi mq450:text-7xl">
                Video injection involves inserting fake video streams into a
                system to trick identity verification processes. This can be
                done using methods like hacking or replacing camera devices. To
                detect these fake videos, technologies like deep learning are
                used, where models can efficiently identify and separate genuine
                from forged video content.
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq800:text-23xl mq450:text-37xl">
            The Benefits of Video Injection Detection
          </h1>
        </div>
      </section>
      <FrameComponent
        trustworthinessColumn="pending_145:94"
        mdiSecurity11="pending_145:95"
        vector="pending_145:96"
        operation1="pending_145:99"
        trustworthinessIcon="pending_145:97"
        trust1="pending_145:100"
        rectangle82="pending_145:65"
        technologyIcon="pending_145:98"
        technology1="pending_145:101"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[153px] pl-[3px] pr-0 box-border max-w-full shrink-0 text-center text-51xl text-black font-poppins">
        <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] inline-block max-w-full mq800:text-23xl mq450:text-37xl">
          <p className="m-0">{`Follow Steps for Video Injection Detection `}</p>
        </h1>
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Homepage1;
