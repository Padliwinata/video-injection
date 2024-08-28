import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InputRows1Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const InputRows1: NextPage<InputRows1Type> = ({
  className = "",
  propFlex,
  propHeight,
  propWidth,
  propMarginLeft,
}) => {
  const inputRowsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  const frameInputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const emailStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-[18px] ${className}`}
      style={inputRowsStyle}
    >
      <input
        className="w-[217px] [border:none] [outline:none] bg-[transparent] h-9 flex flex-row items-start justify-start py-0 px-[3px] box-border font-poppins text-5xl text-black"
        placeholder="Phone Number:"
        type="text"
        style={frameInputStyle}
      />
      <div className="self-stretch flex-1 relative rounded-lg bg-gainsboro" />
    </div>
  );
};

export default InputRows1;
