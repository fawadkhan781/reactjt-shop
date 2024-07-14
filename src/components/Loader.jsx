import React from 'react'

const Loader = () => {
  return (
    <div className="svg-loader d-flex justify-content-center my-5">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#0D6EFD"
        strokeWidth="10"
        strokeDasharray="283"
        strokeDashoffset="75"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;283"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#0D6EFD;#0D6EFD;#0D6EFD;#0D6EFD;#0D6EFD;#0D6EFD;#0DCAF0;#0D6EFD"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
  )
}

export {Loader}