const useProductDivisionFilter = (filter: any, products: any) => {
  let filteredProducts;
  if (filter === "all" || filter === "") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product: any) => product.division.name === filter
    );
  }

  return filteredProducts;
};
export default useProductDivisionFilter;
