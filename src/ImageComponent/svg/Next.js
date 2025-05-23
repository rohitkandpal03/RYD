import React from "react";
import { SvgXml } from "react-native-svg";

export function Next(props) {
  const nextArrow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>`;

  const fun = () => (
    <SvgXml
      xml={nextArrow}
      width={props.width}
      height={props.height}
      fill={props.fill}
    />
  );

  return fun();
}
