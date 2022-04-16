import { css } from "@emotion/css";

export const itemCard = css`
  width: 22%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px 1%;
`;

export const productImage = css`
  width: 80%;
  height: 15em;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const productTitle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 10px 1%;
`;

export const productDescription = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  opacity: 90%;
  font-size: 14px;
`;

export const productPrice = css`
  font-size: 14px;
  font-weight: 500;
  margin: 2px 0 10px 0;
`;
