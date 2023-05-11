import React from "react";

const ProgressLine: React.FC<{ slidesCount: number; slideNumber: number }> = ({
  slidesCount,
  slideNumber,
}) => {
  return (
    <div className="slider__line">
      <span
        className="slider__line__progress"
        style={
          slidesCount && slideNumber + 1
            ? { width: `${((slideNumber + 1) / slidesCount) * 100}%` }
            : { width: 0 }
        }
      >
        Progress
      </span>
    </div>
  );
};

export default ProgressLine;
