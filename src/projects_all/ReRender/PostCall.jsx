import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
const data = [
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];
export default function PostCall() {
  const makeAPostCall = () => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };
  return useMutation({
    mutationKey: ["postCall"],
    mutationFn: makeAPostCall,
    onSuccess: (data, variables, context) => {
      console.log("sucessfull", context);
    },
    onError: () => {
      console.log("error");
    },
    onMutate: () => {
      console.log("onmutate");
    },
  });
}
