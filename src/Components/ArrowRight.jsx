"use client";
import * as React from "react";

function ArrowRight(props) {
  return (
    <svg viewBox='0 0 100 100' fill='none' {...props}>
      <path
        className='prefix__stroke1'
        d='M4 51.008h90m0 0L58.153 15M94 51.008L58.153 86.25'
        stroke='inherit'
        strokeWidth={3}
        strokeLinecap='round'
      />
    </svg>
  );
}

const MemoArrowRight = React.memo(ArrowRight);
export default MemoArrowRight;
