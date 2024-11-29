import { useEffect, useState } from "react";
import { Division, DivisionArray } from "../_models/division";

const useFilteredDivisions = (
  divisions: any,
  categoryId: number,
  setFormState: React.Dispatch<React.SetStateAction<any>>,
  formState: any
) => {
  const [filteredDivisions, setFilteredDivisions] = useState([]);
  useEffect(() => {
    const newFilteredDivsions = divisions.filter(
      (division: any) => division.categoryId === categoryId
    );
    setFilteredDivisions(newFilteredDivsions);
    setFormState((prevFormState: any) => ({
      ...prevFormState,
      divisionId: newFilteredDivsions.at(0)?.id ?? null,
    }));
  }, [formState.categoryId, divisions, categoryId, setFormState]);

  return { filteredDivisions };
};

export default useFilteredDivisions;
