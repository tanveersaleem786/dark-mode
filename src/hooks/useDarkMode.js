import React, {useEffect} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = (key, initialValues) => {
  const [values, setValues] = useLocalStorage([key], initialValues);

  const toggleMode = e => {
      e.preventDefault();
      setValues(!values);
      console.log(values);
  };
  
  return [values, toggleMode];
};