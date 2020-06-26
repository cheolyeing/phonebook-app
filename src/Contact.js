import React, { useState } from "react";

import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";

function Contact() {
  const [data, setData] = useState([
    {
      name: "JungTaek",
      phone: "010-9043-7556",
    },
    {
      name: "HeeCheol",
      phone: "010-4500-9591",
    },
    {
      name: "ByungHeon",
      phone: "010-2402-8800",
    },
    {
      name: "HeeJun",
      phone: "010-8900-7556",
    },
    {
      name: "HeeSeung",
      phone: "010-4019-7557",
    },
    {
      name: "SaeHyun",
      phone: "010-7278-7556",
    },
  ]);
  const [key, setKey] = useState(-1);
  const [search, setSearch] = useState("");

  const handleClick = (i) => {
    setKey(i);
  };

  const showContact = (data) => {
    data.sort((d1, d2) => {
      return d1.name < d2.name ? -1 : 1;
    });
    data = data.filter((d) => {
      return d.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    return data.map((d, idx) => (
      <ContactInfo
        name={d.name}
        key={idx}
        onClick={() => {
          handleClick(idx);
        }}
      />
    ));
  };

  return (
    <div>
      <h1>Contacts</h1>
      <input
        value={search}
        onChange={({ target: { value } }) => {
          setSearch(value);
        }}
        placeholder="Search"
      ></input>
      {showContact(data)}
      {console.log(key)}
      <ContactDetails selected={key !== -1} data={data[key]} />
    </div>
  );
}

export default Contact;
