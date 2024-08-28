import type { NextPage } from "next";
import InputRows1 from "./input-rows1";

export type ContactDetailsType = {
  className?: string;
};

const ContactDetails: NextPage<ContactDetailsType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1681px] flex flex-row items-start justify-center pt-0 px-5 pb-[216px] box-border max-w-full shrink-0 text-center text-16xl text-black font-roboto-mono mq450:pb-[91px] mq450:box-border mq1125:pb-[140px] mq1125:box-border ${className}`}
    >
      <div className="w-[1395px] flex flex-row items-end justify-center gap-[86px] max-w-full gap-[43px] gap-[21px] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-8 box-border min-w-[458px] max-w-full mq800:min-w-full">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[82px] max-w-full gap-[41px] gap-5">
            <div className="self-stretch h-[404px] flex flex-col items-start justify-start gap-7">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[18px]">
                <div className="w-[267px] flex flex-row items-start justify-start py-0 px-1 box-border">
                  <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">
                    Name:
                  </div>
                </div>
                <div className="self-stretch flex-1 relative rounded-lg bg-gainsboro z-[1]" />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[18px]">
                <div className="w-[267px] flex flex-row items-start justify-start py-0 px-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">
                      Email
                    </div>
                    <div className="flex-1 relative text-5xl font-poppins text-black text-left z-[1] ml-[-259px] mq450:text-lgi">
                      Email:
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 relative rounded-lg bg-gainsboro" />
              </div>
              <InputRows1 />
            </div>
            <div className="w-[623px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <button className="cursor-pointer [border:none] py-1.5 px-0 bg-red w-[401px] rounded-xl flex flex-row items-start justify-start box-border max-w-full hover:bg-crimson">
                <div className="h-[83px] w-[401px] relative rounded-xl bg-red hidden max-w-full" />
                <b className="h-[71px] flex-1 relative text-11xl flex font-roboto-mono text-white text-center items-center justify-center max-w-full z-[1] mq800:text-5xl mq450:text-lg">
                  Submit
                </b>
              </button>
            </div>
          </form>
        </div>
        <div className="w-[605px] flex flex-row items-start justify-start relative min-w-[605px] max-w-full mq800:min-w-full mq1350:flex-1">
          <div className="h-[728px] w-[333px] absolute !m-[0] right-[-143px] bottom-[-33px] [filter:blur(1500px)] rounded-31xl bg-red overflow-hidden shrink-0" />
          <img
            className="h-[125.7px] w-[330px] absolute !m-[0] top-[34.9px] left-[-245px]"
            alt=""
          />
          <div className="flex-1 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white overflow-hidden flex flex-col items-end justify-start pt-[90.7px] pb-[159.4px] pl-[74px] pr-[76px] box-border gap-[92px] max-w-full z-[2] gap-[46px] mq800:pt-[59px] mq800:pb-[104px] mq800:pl-[37px] mq800:pr-[38px] mq800:box-border gap-[23px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[61.4px] gap-[31px]">
              <b className="self-stretch h-[71.9px] relative flex items-center justify-center shrink-0 mq800:text-9xl mq450:text-2xl">{`Send Us A Message `}</b>
              <div className="self-stretch h-[0.9px] relative bg-black shrink-0" />
            </div>
            <div className="w-[445.9px] h-[0.9px] relative bg-black max-w-full" />
            <div className="w-[445.9px] h-[0.9px] relative bg-black hidden max-w-full" />
            <div className="w-[445.9px] h-[0.9px] relative bg-black max-w-full z-[1]" />
            <div className="w-[445.9px] h-[0.9px] relative bg-black max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
