import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
export const CameraIcon = (props) => (
  <Svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
  >
    <G clipPath="url(#clip0_1_20)">
      <Path
        d="M1.52588e-05 4.59603V10.4557C0.00532776 11.7807 1.08752 12.847 2.4072 12.8417H10.9481C11.191 12.8417 11.3863 12.6463 11.3863 12.4088V6.54947C11.381 5.22447 10.2991 4.1579 8.97908 4.16322H0.43814C0.195328 4.16322 1.52588e-05 4.35853 1.52588e-05 4.59603ZM11.93 6.88197L15.4563 4.30572C15.7625 4.05259 16 4.11572 16 4.57509V12.4298C16 12.9526 15.7097 12.8892 15.4563 12.6992L11.93 10.1282V6.88197Z"
        fill="#4A8CFF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_20">
        <Rect
          width={16}
          height={16}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);


