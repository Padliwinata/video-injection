import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type RectangleComponentType = {
  className?: string;
  rectangle2?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propPosition?: CSSProperties["position"];
  propMinHeight?: CSSProperties["minHeight"];
  propMargin?: CSSProperties["margin"];
  propHeight?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propMargin1?: CSSProperties["margin"];
};

const RectangleComponent: NextPage<RectangleComponentType> = ({
  className = "",
  propAlignSelf,
  propPadding,
  propPosition,
  propMinHeight,
  propMargin,
  propHeight,
  propTop,
  propRight,
  propBottom,
  propLeft,
  rectangle2,
  propMargin1,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      position: propPosition,
      minHeight: propMinHeight,
      margin: propMargin,
      height: propHeight,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [
    propAlignSelf,
    propPadding,
    propPosition,
    propMinHeight,
    propMargin,
    propHeight,
    propTop,
    propRight,
    propBottom,
    propLeft,
  ]);

  const weCreatedAStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[253px] px-0 box-border relative min-h-[643px] max-w-full text-center text-26xl text-white font-poppins mq825:pt-[164px] mq825:pb-[164px] mq825:box-border ${className}`}
      style={rectangleDivStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={rectangle2}
      />
      <div
        className="flex-1 relative font-medium inline-block max-w-full z-[1] mq450:text-8xl mq825:text-17xl"
        style={weCreatedAStyle}
      >
        “We created a technology to detect whether a video is real or fake”
      </div>
    </div>
  );
};

export default RectangleComponent;
