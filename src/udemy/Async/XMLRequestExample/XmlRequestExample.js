const XMLHttpRequest = require(XMLHttpRequest);

const xml = new XMLHttpRequest();

xml.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xml.send();

xml.onload = () => {
  if (xml.status !== 200) {
  } else {
    console.log(xml.response);
  }
};

xml.onerror = () => {
  console.log("ion error");
};
