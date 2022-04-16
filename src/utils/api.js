export const getProductListApi = async (args) => {
  const { category, sort } = args;
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products${sort ? `?sort=${sort}` : ""}${
        category ? `/category/${category}${sort ? `?sort=${sort}` : ""}` : ""
      }`
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getCategoryListAPi = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
};
