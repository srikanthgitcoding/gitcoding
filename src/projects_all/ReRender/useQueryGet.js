import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const useQueryGet = () => {
  const getFunction = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response;
  };
  return useQuery({
    queryKey: ["getData"],
    queryFn: getFunction,
    enabled: false,
    cacheTime: 9,
  });
};

export default useQueryGet;
