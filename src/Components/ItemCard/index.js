import {
  itemCard,
  productImage,
  productTitle,
  productDescription,
  productPrice,
} from "./style";

export const ItemCard = ({ imgUrl, title, description, price, idx }) => {
  return (
    <div className={itemCard}>
      <img className={productImage} alt={title} src={imgUrl} />
      <div className={productTitle}>{title}</div>
      <div className={productDescription}>{description}</div>
      <div className={productPrice}>Rs. {price}</div>
    </div>
  );
};
