import React, { useEffect, useState } from "react";
import "./App.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, listData] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const getUrlData = async () => {
    const data = await fetch(url);
    const newData = await data.json();
    listData(newData);
    setLoading(false);
  };

  useEffect(() => {
    getUrlData();
  }, []);

  if (loading) {
    return <div>Loading..........</div>;
  }
  console.log("##", value);
  const { id, order, title } = data[value];

  return (
    <div>
      {data &&
        data.map((e, i) => {
          return (
            <button
              className={`${i === value && "colorful"}`}
              onClick={() => setValue(i)}
            >
              Button {i}
            </button>
          );
        })}
      <br />
      {title} {title}
    </div>
  );
}

export default App;
