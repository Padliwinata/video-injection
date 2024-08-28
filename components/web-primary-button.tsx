import type { NextPage } from "next";

export type WebPrimaryButtonType = {
  className?: string;
};

const WebPrimaryButton: NextPage<WebPrimaryButtonType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute h-full top-[0px] bottom-[0px] left-[74px] rounded-31xl bg-red w-[375px] text-center text-sm text-white font-roboto-mono ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/buttonbg.svg"
      />
      <img
        className="absolute h-[29.05%] top-[34.52%] right-[17px] bottom-[36.43%] max-h-full w-4 hidden"
        alt=""
        src="/iconcheckmark-white.svg"
      />
      <img
        className="absolute h-[29.05%] top-[34.52%] bottom-[36.43%] left-[23px] max-h-full w-4 hidden"
        alt=""
        src="/iconplussign-white.svg"
      />
      <b className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_104.5px)] tracking-[0.5px] hidden w-[209px]" />
    </div>
  );
};

export default WebPrimaryButton;
