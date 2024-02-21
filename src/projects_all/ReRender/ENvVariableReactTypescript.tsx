import axios from "axios";
import React from "react";

const getEnv = (key: keyof NodeJS.ProcessEnv): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error("");
  }
  return value;
};

axios.create({
  baseURL: "",
});

const ENVVariableTest = () => {
  return <div>Test</div>;
};

export default ENVVariableTest;
