import type { NextPage } from "next";
import InputRows1 from "../components/input-rows1";

const Login: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-x-auto flex flex-row items-start justify-start gap-[58px] leading-[normal] tracking-[normal] text-center text-11xl text-gray font-roboto-mono gap-[29px]">
      <div className="w-[964px] shrink-0 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[75.6px] max-w-full gap-[19px] gap-[38px]">
          <div className="self-stretch h-[101.4px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
            <div className="self-stretch w-[747.6px] flex flex-row items-end justify-start gap-[0.2px] max-w-full">
              <div className="self-stretch w-[163.8px] flex flex-col items-start justify-start py-0 pl-0 pr-[13px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="w-[171.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[11.9px] box-border">
                <a className="[text-decoration:none] self-stretch h-[77.5px] relative font-bold text-[inherit] flex items-center justify-center shrink-0">
                  Home
                </a>
              </div>
              <div className="w-[181.8px] flex flex-col items-start justify-end pt-0 pb-[11.9px] pl-0 pr-[11px] box-border">
                <a className="[text-decoration:none] self-stretch h-[77.5px] relative font-bold text-[inherit] flex items-center justify-center shrink-0 whitespace-nowrap">
                  About Us
                </a>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11.9px]">
                <b className="self-stretch h-[77.5px] relative flex items-center justify-center shrink-0 whitespace-nowrap">
                  Contact Us
                </b>
              </div>
            </div>
          </div>
          <form className="m-0 w-[1121.4px] flex flex-col items-end justify-start gap-7 max-w-[117%] shrink-0">
            <div className="w-[918.7px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[446.5px] flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-1.5 w-[461.3px] absolute !m-[0] top-[32px] right-[-75.8px]"
                  loading="lazy"
                  alt=""
                />
                <h1 className="m-0 h-[98px] flex-1 relative text-29xl font-bold font-poppins text-black text-center flex items-center justify-center max-w-full z-[1] mq450:text-10xl mq1125:text-19xl">
                  Sign In
                </h1>
              </div>
            </div>
            <div className="w-[843px] flex flex-row flex-wrap items-start justify-center py-0 pl-5 pr-0 box-border gap-[73px] max-w-full gap-[18px] gap-9">
              <div className="flex-1 flex flex-col items-end justify-start gap-7 min-w-[244px] max-w-full">
                <div className="self-stretch h-[116px] flex flex-col items-start justify-start gap-[18px]">
                  <div className="w-[242px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">
                      First Name:
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative rounded-lg bg-gainsboro" />
                </div>
                <InputRows1
                  propFlex="unset"
                  propHeight="116px"
                  propWidth="240px"
                  propMarginLeft="-234px"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-7 min-w-[244px] max-w-full">
                <div className="self-stretch h-[116px] flex flex-col items-start justify-start gap-[18px]">
                  <div className="w-[242px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">
                      Last Name:
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative rounded-lg bg-gainsboro" />
                </div>
                <div className="self-stretch h-[116px] flex flex-col items-start justify-start gap-[18px]">
                  <div className="w-[242px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">
                      Password:
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative rounded-lg bg-gainsboro" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[2.4px] max-w-full">
              <div className="w-[296px] flex flex-col items-start justify-end pt-0 px-0 pb-[39px] box-border">
                <img
                  className="self-stretch h-1.5 relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[53px] min-w-[535px] max-w-full mq800:min-w-full gap-[26px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[73px] max-w-full mq800:flex-wrap gap-[18px] gap-9">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[244px] max-w-full">
                    <div className="w-[242px] flex flex-row items-start justify-start py-0 px-1 box-border">
                      <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">
                        Phone Number:
                      </div>
                    </div>
                    <div className="self-stretch h-[62px] relative rounded-lg bg-gainsboro" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[244px] max-w-full">
                    <div className="w-[242px] flex flex-row items-start justify-start py-0 px-1 box-border">
                      <div className="flex-1 relative text-5xl font-poppins text-black text-left mq450:text-lgi">{`Country: `}</div>
                    </div>
                    <div className="self-stretch h-[62px] relative rounded-lg bg-gainsboro" />
                  </div>
                </div>
                <div className="w-[746.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <button className="cursor-pointer [border:none] py-3.5 pl-[39px] pr-5 bg-red w-[284.2px] rounded-1001xl flex flex-row items-start justify-center box-border hover:bg-crimson">
                    <div className="h-16 w-[284.2px] relative rounded-1001xl bg-red hidden" />
                    <div className="relative text-5xl font-semibold font-poppins text-white text-left inline-block min-w-[96px] z-[1] mq450:text-lgi">
                      Submit
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[706px] shrink-0 flex flex-col items-end justify-end py-[402px] px-[72px] box-border min-h-[1001px] max-w-full text-29xl text-white font-poppins mq800:pl-9 mq800:pr-9 mq800:box-border mq450:pt-[170px] mq450:pb-[170px] mq450:box-border mq1125:pt-[261px] mq1125:pb-[261px] mq1125:box-border">
        <div className="w-[546.8px] flex flex-row items-start justify-start relative max-w-full">
          <h1 className="!m-[0] h-[114px] w-[446.5px] absolute top-[-57px] right-[46.2px] text-inherit font-extrabold font-[inherit] flex items-center justify-center z-[1] mq450:text-10xl mq1125:text-19xl">
            Hello, Friend!
          </h1>
          <div className="flex-1 relative text-9xl font-medium inline-block max-w-full z-[2] mq450:text-[22px]">
            <p className="m-0">Enter your personal details and start</p>
            <p className="m-0">{` journey with us `}</p>
          </div>
          <div className="h-[1055px] w-[735px] absolute !m-[0] top-[-514px] right-[-101.8px]">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-red w-full h-full" />
            <img
              className="absolute top-[259px] left-[285.1px] w-[120.8px] h-[201.1px] z-[2]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
