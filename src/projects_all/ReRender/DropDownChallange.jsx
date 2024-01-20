import React, { useState, useEffect } from "react";

const DropDownChallange = () => {
  const [formdata, setformdata] = useState({
    firstName: "",
    city: "",
    remember: true,
    subjects: [""],
    webPage: "",
  });

  const json = {
    question: "Do you support cookies in cakes?",
    choices: [
      { text: "html", value: "html" },
      { text: "css", value: "css" },
      { text: "js", value: "js" },
    ],
  };

  const inputChnaged = (e) => {
    if (e.target.name == "remember") {
      setformdata((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    } else {
      console.log("here");
      setformdata((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  return (
    <div>
      <input
        name="firstName"
        type="text"
        value={formdata.firstName}
        onChange={inputChnaged}
      />
      <br />
      <br />
      <select
        name="city"
        id="idd"
        value={formdata.city}
        onChange={inputChnaged}
      >
        <option disabled></option>
        <option value="Hyderabd">Hyderabd</option>
        <option value="Bangolore">Bangolore</option>
        <option value="goa">goa</option>
      </select>
      <br />
      <br />
      Rember :{" "}
      <input
        type="checkbox"
        id="rember"
        name="remember"
        value={formdata.remember}
        onChange={inputChnaged}
      />
      <div>
        <p>
          {json.question}
          {json.choices.map((item) => {
            return (
              <>
                <label for="webPage">{item.text}</label>
                <input
                  type="radio"
                  name="webPage"
                  value={item.value}
                  onChange={inputChnaged}
                />
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default DropDownChallange;
