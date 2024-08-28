import type { NextPage } from "next";
import Header from "../components/header";
import RectangleComponent from "../components/rectangle-component";
import Content from "../components/content";
import TeamMembers from "../components/team-members";

const AboutUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-51xl text-black font-poppins mq1425:h-auto">
      <div className="mt-[-1041.4px] w-[824px] flex flex-row items-start justify-center pt-0 px-5 pb-[815.9px] box-border max-w-full lg:pb-[530px] lg:box-border mq825:pb-[344px] mq825:box-border">
        <img
          className="w-[528px] relative max-h-full max-w-full"
          alt=""
          src="/rectangle-3253.svg"
        />
      </div>
      <Header />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[564px] box-border min-h-[1207px] max-w-full shrink-0 text-center text-51xl text-white font-poppins lg:pb-[367px] lg:box-border mq450:pb-[239px] mq450:box-border">
        <RectangleComponent rectangle2="/rectangle-2.svg" />
        <h2 className="m-0 self-stretch h-[358.9px] relative text-inherit font-extrabold font-[inherit] flex items-center justify-center shrink-0 z-[3] mt-[-643px] mq450:text-23xl mq825:text-37xl">{`About Us `}</h2>
      </section>
      <Content />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[84px] pl-[21px] pr-0 box-border max-w-full shrink-0 text-center text-51xl text-white font-poppins">
        <div className="w-[1747px] flex flex-row items-start justify-start relative max-w-[101%] shrink-0">
          <img
            className="h-48 w-[1848px] absolute !m-[0] bottom-[-30px] left-[-62px] rounded-31xl"
            loading="lazy"
            alt=""
            src="/rectangle-83.svg"
          />
          <h2 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-23xl mq825:text-37xl">
            Awesome Partner
          </h2>
          <div className="w-[1763px] absolute !m-[0] top-[3px] left-[-17px] text-11xl font-semibold flex items-center justify-center z-[2] mq450:text-lg mq825:text-5xl">
            PARTNER
          </div>
        </div>
      </section>
      <section className="ml-[-20px] mb-[262px] w-[1757px] relative text-16xl font-medium font-poppins text-black text-center flex items-center max-w-full shrink-0 box-border pr-2.5 mq450:text-2xl mq825:text-9xl">
        <span className="w-full">
          <p className="m-0">{`Penelitian ini dibiayai oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) Indonesia dengan grant `}</p>
          <p className="m-0">nomor 106/E5/PG.02.00.PL/2024.</p>
        </span>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[102px] pl-5 pr-[30px] shrink-0">
        <h2 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-23xl mq825:text-37xl">
          Our Team
        </h2>
      </div>
      <TeamMembers />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[184px] pl-[264px] pr-5 box-border max-w-full shrink-0 text-left text-21xl text-black font-poppins mq450:pl-5 mq450:box-border mq825:pl-[66px] mq825:box-border mq1425:pl-[132px] mq1425:box-border">
        <div className="w-[1171px] flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
          <div className="relative font-medium inline-block max-w-full mq450:text-5xl mq825:text-13xl">
            Rizal Nur Abaatun
          </div>
          <div className="w-[476px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative font-medium mq450:text-5xl mq825:text-13xl">
              Daffa Abiesta Pratama
            </div>
          </div>
        </div>
      </section>
      <img
        className="w-[550px] h-[445px] absolute !m-[0] top-[596px] left-[603px] rounded-xl object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/gambar-whatsapp-20240803-pukul-225944-95600640-1@2x.png"
      />
      <footer className="self-stretch h-[202px] bg-darkslategray overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-4 pb-[201px] box-border max-w-full text-center text-5xl text-white font-roboto-mono">
        <div className="flex-1 relative font-light inline-block max-w-full mq450:text-lgi">
          ©2024 Video Injection Detection. All rights reserved. 
        </div>
      </footer>
      <img
        className="w-[499px] h-[397px] absolute !m-[0] top-[620px] left-[63px] rounded-xl object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/gambar-whatsapp-20240803-pukul-131029-10c2514e-1@2x.png"
      />
      <img
        className="w-[500px] h-[378px] absolute !m-[0] top-[632px] right-[62px] rounded-xl object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/gambar-whatsapp-20240803-pukul-131029-10c2514e-2@2x.png"
      />
    </div>
  );
};

export default AboutUs;
