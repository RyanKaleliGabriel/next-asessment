const useSortData = (data: any, sortBy: any) => {
  let sortedData;

  if (sortBy === "" || sortBy === "default") {
    return data;
  } else {
    const [field, direction] = sortBy.split("-");
    const modifier = direction === "asc" ? 1 : -1;
    sortedData = data.sort((a: any, b: any) => {
      switch (field) {
        case "price":
          return (a.price - b.price) * modifier;
        case "stock":
          return (a.stock_level - b.stock_level) * modifier
        default:
          return 0;
      }
    });
  }

  return sortedData;
};

export default useSortData;
