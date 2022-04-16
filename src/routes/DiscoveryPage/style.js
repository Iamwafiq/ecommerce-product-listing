import { css } from "@emotion/css";

export const dicoverPageContainer = css`
  width: 90%;
  margin: auto;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const discoverPageContent = css`
  display: flex;
  width: 100%;
`;
export const filterSelectionTitle = css`
  width: 50%;
  display: flex;
  flex-direction: row;
`;
export const sideBarTitle = css`
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 10px 0;
  width: 42%;
`;

export const productAppliedFilter = css`
  padding: 10px 0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  text-transform: capitalize;
  & > div {
    margin-right: 10px;
    border: 0.5px solid lightgrey;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const pageContentHead = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const productListSort = css`
  width: 20%;
  text-align: left;
  display: flex;
  margin-right: 10px;
  border: 0.5px solid lightgrey;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
  justify-content: space-between;
  position: relative;
`;

export const dropdownHandler = css`
  transform: rotate(180deg);
  font-weight: 300;
  float: right;
`;

export const sortSelection = css`
  margin-left: 3%;
  display: flex;
  & > div {
    font-weight: 500;
    margin-left: 10px;
  }
`;

export const dropDownList = css`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  background: white;
  border: 1px solid lightgray;
  & > div {
    padding: 4px 12px;
    border-bottom: 1px solid lightgrey;
    &:hover {
      background: lightgrey;
    }
  }
`;
export const dashboardSection = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid lightgrey;
  width: 80%;
  justify-content: flex-start;
`;
