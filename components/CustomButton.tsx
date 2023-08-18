"use client"

import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({title, containerStyles, textStyles, rightIcon, handleClick, btnType, isDisabled} : CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
    </button>
  );
};

export default CustomButton;
