import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "./actions";
import { Dashboard } from "../../Components/Dashboard";
import { HeaderComponent } from "../../Components/HeaderComponent";
import { SideBarComponent } from "../../Components/Sidebar";
import {
  dicoverPageContainer,
  discoverPageContent,
  sideBarTitle,
  pageContentHead,
  productListSort,
  productAppliedFilter,
  filterSelectionTitle,
  dropdownHandler,
  sortSelection,
  dropDownList,
  dashboardSection,
} from "./style";
import { sortObj } from "../../utils/constants";
import { LoaderComponent } from "../../Components/LoaderComponent";

const DiscoveryPage = (props) => {
  const dispatch = useDispatch();
  const discoveryReducer = useSelector((state) => state.discoveryReducer);
  const [queryData, updateQueryData] = useState({
    category: "",
    sort: null,
  });
  const [showList, setShowList] = useState(false);
  const { sort, category } = queryData;
  const openDropDown = (event) => {
    setShowList(!showList);
  };
  useEffect(() => {
    dispatch(getProductList({ ...queryData }));
  }, [queryData, dispatch]);

  return (
    <div className={dicoverPageContainer}>
      <HeaderComponent />
      <div className={pageContentHead}>
        <div className={filterSelectionTitle}>
          <div className={sideBarTitle}>Filters</div>
          {category ? (
            <div className={productAppliedFilter}>
              <div>{category}</div>
              <div
                onClick={() =>
                  updateQueryData({
                    category: "",
                    sort: null,
                  })
                }
              >
                {" "}
                Clear
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={productListSort} onClick={(e) => openDropDown(e)}>
          <div className={sortSelection}>
            Sort By: <div>{sortObj[sort || "default"]}</div>
          </div>
          <div className={dropdownHandler}>^</div>
          {showList && (
            <div className={dropDownList}>
              <div
                onClick={() => updateQueryData({ ...queryData, sort: "asc" })}
              >
                {sortObj.asc}
              </div>
              <div
                onClick={() => updateQueryData({ ...queryData, sort: "desc" })}
              >
                {sortObj.desc}
              </div>
              <div
                onClick={() => updateQueryData({ ...queryData, sort: null })}
              >
                Clear Sort
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={discoverPageContent}>
        <SideBarComponent
          updateQueryData={updateQueryData}
          queryData={queryData}
        />
        {discoveryReducer && discoveryReducer?.productList ? (
          <Dashboard productList={discoveryReducer?.productList} />
        ) : (
          <div className={dashboardSection}>
            <LoaderComponent size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoveryPage;
