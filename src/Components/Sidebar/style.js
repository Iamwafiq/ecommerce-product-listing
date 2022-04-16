import { css } from "@emotion/css";

export const sideBarSection = css`
  width: 20%;
  height: auto;
  min-height: calc(100vh - 90px);
  border-right: 1px solid lightgrey;
`;

export const filterList = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-top: 1px solid lightgrey;
  padding: 10px 0;
`;
export const filterTitle = css`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 10px 0;
`;

export const eachFilter = css`
  margin: 5px 0;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;
