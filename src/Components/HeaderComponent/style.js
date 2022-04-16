import { css } from "@emotion/css";

export const headerSection = css`
  height: 70px;
  box-shadow: 0px 10px 10px -15px grey;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const navLinks = css`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const itemSearchBar = css`
  margin-right: 4%;
  width: 25%;
  input {
    width: 100%;
    font-size: 16px;
    padding: 6px;
    background: #f5f5f6;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #757575;
  }
`;
