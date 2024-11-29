const useFilterData = (data: any, filter: any, model: any) => {
  let filteredData;

  if (filter === "all" || filter === "") {
    filteredData = data;
  } else {
    switch (model) {
      case "manufacturer":
        filteredData = data.filter((data: any) => data.name === filter);
        break;
      case "product":
        filteredData = data.filter(
          (data: any) => data.manufacturer.name === filter
        );
        break;
      case "branch":
        filteredData = data.filter((data: any) => data.county === filter);
        break;
      default:
        filteredData = data;
        break;
    }
  }

  return filteredData;
};

export default useFilterData;
