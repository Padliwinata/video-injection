import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import ContactDetails from "../components/contact-details";

const ContactUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0.5 px-0 pb-0 box-border gap-1 leading-[normal] tracking-[normal] text-center text-5xl text-white font-roboto-mono mq1350:h-auto">
      <section className="mt-[-1178px] self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[238px] box-border max-w-full mq800:pb-[101px] mq800:box-border mq1350:pb-[155px] mq1350:box-border">
        <div className="h-[936px] w-[1528px] relative max-w-full">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[-273px] max-h-full w-[1781px]"
            alt=""
            src="/rectangle-79.svg"
          />
          <img
            className="absolute top-[349.4px] left-[148px] w-[528px] h-[181.2px] z-[1]"
            alt=""
            src="/rectangle-325.svg"
          />
        </div>
      </section>
      <header className="w-[1708px] flex flex-row items-start justify-end pt-0 px-1.5 pb-[7px] box-border max-w-full text-center text-11xl text-black font-roboto-mono">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[11.6px] max-w-full">
          <div className="h-[122.4px] w-[243.4px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
            <img
              className="w-[150px] flex-1 relative max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/logo-kementerian-pendidikan-dan-kebudayaan-kemendikbud-png1080p--filevector69-2@2x.png"
            />
          </div>
          <div className="w-[342.4px] flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.2px]">
              <a className="[text-decoration:none] h-[77.5px] flex-1 relative font-bold text-[inherit] flex items-center justify-center mq800:text-5xl mq450:text-lg">
                Home
              </a>
              <a className="[text-decoration:none] h-[77.5px] flex-1 relative font-bold text-[inherit] flex items-center justify-center mq800:text-5xl mq450:text-lg">
                About Us
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border min-w-[452px] max-w-full text-red mq800:min-w-full">
            <a className="[text-decoration:none] w-[229.6px] h-[77.5px] relative font-bold text-[inherit] flex items-center justify-center shrink-0 mq800:text-5xl mq450:text-lg">
              Contact Us
            </a>
          </div>
          <div className="h-[146px] w-[380px] relative max-w-full">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[231px] max-h-full w-[149px] object-cover"
              loading="lazy"
              alt=""
              src="/logo-tel-u-3@2x.png"
            />
            <img
              className="absolute top-[35px] left-[0px] w-[250px] h-[58px] object-cover z-[1]"
              alt=""
              src="/lofoif-4@2x.png"
            />
          </div>
        </div>
      </header>
      <section className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border relative max-w-full shrink-0 text-center text-51xl text-white font-poppins">
        <img
          className="h-[50px] w-[50px] absolute !m-[0] right-[447px] bottom-[27.4px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/shining-1@2x.png"
        />
        <div className="w-[1754px] flex flex-col items-start justify-start pt-0 pb-[232px] px-0 box-border relative min-h-[520px] max-w-full mq800:pb-[151px] mq800:box-border">
          <h1 className="m-0 self-stretch h-[288.5px] relative text-inherit font-extrabold font-[inherit] flex items-center justify-center shrink-0 z-[2] mq800:text-37xl mq450:text-23xl">{`Contact Us `}</h1>
          <h3 className="!m-[0] w-[1757px] absolute right-[-3px] bottom-[270.4px] text-26xl font-medium font-[inherit] flex items-center justify-center z-[3] mq800:text-17xl mq450:text-8xl">
            “We look forward to the opportunity to speak with you.”
          </h3>
        </div>
      </section>
      <img
        className="w-[69px] h-[71.6px] absolute !m-[0] right-[299px] bottom-[545.2px] object-cover"
        loading="lazy"
        alt=""
        src="/materialsymbolsattachemail-1@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-28 pl-[3px] pr-1.5 box-border max-w-full shrink-0 text-center text-51xl text-black font-poppins">
        <h1 className="m-0 h-[91.6px] flex-1 relative text-inherit font-bold font-[inherit] flex items-center justify-center max-w-full mq800:text-37xl mq450:text-23xl">{`Contact Information `}</h1>
      </section>
      <FrameComponent6 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[59px] pl-[3px] pr-0 box-border max-w-full shrink-0 text-center text-51xl text-black font-poppins">
        <h1 className="m-0 h-[91.6px] flex-1 relative text-inherit font-bold font-[inherit] flex items-center justify-center max-w-full z-[1] mq800:text-37xl mq450:text-23xl">{`Get In Touch With Us `}</h1>
      </section>
      <ContactDetails />
      <section className="mr-[-35px] mb-[791px] w-[1748px] h-[146px] relative text-51xl font-bold font-poppins text-black text-center flex items-center justify-center shrink-0 max-w-full mq800:text-37xl mq450:text-23xl">{`Find Us On Google Maps `}</section>
      <div className="mr-[-23px] w-[1724px] relative font-light flex items-center justify-center max-w-full mq450:text-lgi">
        ©2024 Video Injection Detection. All rights reserved. 
      </div>
      <div className="w-[300px] h-[757.1px] relative hidden z-[10]" />
      <section className="w-[1763px] !m-[0] absolute top-[159px] left-[0px] flex flex-row items-start justify-start">
        <div className="h-24 w-[1761px] absolute !m-[0] bottom-[0px] left-[-4px] [filter:blur(4px)] bg-red" />
        <img
          className="h-[346px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/gambar-whatsapp-20240803-pukul-225944-67015241-1@2x.png"
        />
      </section>
      <footer className="self-stretch h-[202px] relative bg-darkslategray overflow-hidden shrink-0" />
    </div>
  );
};

export default ContactUs;
