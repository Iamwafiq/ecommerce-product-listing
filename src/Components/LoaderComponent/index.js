import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

export const LoaderComponent = ({ size = 20 }) => {
  const override = css`
    display: block;
    margin: 15px auto;
  `;
  return (
    <PulseLoader color={"#D3D3D3"} loading={true} css={override} size={size} />
  );
};
