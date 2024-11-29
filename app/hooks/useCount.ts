const useCount = (
  model: string,
  allData: any[],
  operatedData: any[],
  filter: any,
  sortBy?: any
) => {
  let count;
  switch (model) {
    case "branch":
      count =
        filter === "all" || filter === ""
          ? allData.length
          : operatedData.length;
      break;
    case "category":
      count =
        filter === "default" || filter === ""
          ? allData.length
          : operatedData.length;
      break;
    case "division":
      count =
        filter === "default" || filter === ""
          ? allData.length
          : operatedData.length;
      break;
    case "manufacturer":
      count =
        (filter === "" || filter === "all") &&
        (sortBy === "" || sortBy === "default")
          ? allData.length
          : operatedData.length;
      break;
    case "product":
      count =
        (filter === "" || filter === "all") &&
        (sortBy === "" || sortBy === "default")
          ? allData.length
          : operatedData.length;
      break;
    default:
      count = allData.length;
  }
  return count;
};

export default useCount;
