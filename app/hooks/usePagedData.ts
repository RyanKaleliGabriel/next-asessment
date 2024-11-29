import { PAGE_SIZE } from "../_utils/constants";

const usePagedData = (data: any, page: any) => {
  const from = (Number(page) - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE ;
  return data.slice(from, to);
};

export default usePagedData;
