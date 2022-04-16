import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../routes/DiscoveryPage/actions";
import { LoaderComponent } from "../LoaderComponent";
import { sideBarSection, filterList, filterTitle, eachFilter } from "./style";

export const SideBarComponent = ({ updateQueryData, queryData }) => {
  const dispatch = useDispatch();
  const discoveryReducer = useSelector((state) => state.discoveryReducer);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  return (
    <div className={sideBarSection}>
      <div className={filterList}>
        <div className={filterTitle}>CATEGORIES</div>
        {discoveryReducer && discoveryReducer.categoryList ? (
          discoveryReducer.categoryList.map((category) => (
            <div className={eachFilter}>
              <input
                onClick={(e) =>
                  updateQueryData({
                    ...queryData,
                    category: e.target.value,
                  })
                }
                type="radio"
                name="filter-selection"
                value={category}
                checked={queryData?.category === category}
              />
              {category}
            </div>
          ))
        ) : (
          <LoaderComponent size={20} />
        )}
      </div>
    </div>
  );
};
