import React, { useMemo } from "react";

const useStaticData = (input) => {

  const parsedValue = useMemo(() => {
    const values = localStorage.getItem("values");
    return values ? JSON.parse(values) : [];
  }, []);

  const result = useMemo(() => {
    const suggestedValue = parsedValue.filter((item) => item.includes(input));
    return suggestedValue;
  }, [input,parsedValue]);

  return result;
};

export default useStaticData;
