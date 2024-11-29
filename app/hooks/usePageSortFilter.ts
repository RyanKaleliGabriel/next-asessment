const usePageSortFilter = (searchParams: any, model?: any) => {
  let query ,page, filter, sortBy;
  if (model === "branch") {
    filter = searchParams?.filter ?? "all";
    page = searchParams?.page ?? 1;
  } else {
    filter = searchParams?.manufacturer ?? "all";
    sortBy = searchParams?.sortBy ?? "";
    page = searchParams?.page ?? 1;
    query = searchParams?.query ?? ""
    
  }

  return { query, page, filter, sortBy };
};
export default usePageSortFilter;
