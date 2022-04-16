import { ItemCard } from "../../Components/ItemCard";
import { dashboardSection } from "./style";

export const Dashboard = ({ productList }) => {
  return (
    <div className={dashboardSection}>
      {productList &&
        productList.map(({ image, title, description, price }) => (
          <ItemCard
            imgUrl={image}
            title={title}
            description={description}
            price={price}
          />
        ))}
    </div>
  );
};
